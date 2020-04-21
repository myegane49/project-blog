import Vuex from 'vuex';
import axios from 'axios'
import Cookie from 'js-cookie'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: null
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
                state.loadedPosts[postIndex] = editedPost
            },
            setToken(state, token) {
                state.token = token
            },
            clearToken(state) {
                state.token = null
            }
        },
        actions: {
            nuxtServerInit(context, asyncContext) {
                // if (!process.client) {
                //     console.log(asyncContext.req)
                // }
                // return new Promise((resolve, reject) => {
                //     setTimeout(() => {
                //         context.commit('setPosts', [
                //             {id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-High-Tech-Wallpaper.jpg'},
                //             {id: '2', title: 'Second Post', previewText: 'This is our second post!', thumbnail: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-High-Tech-Wallpaper.jpg'}
                //         ])
                //         resolve() 
                //     }, 1000)
                // })

                // return axios.get(process.env.baseUrl + '/posts.json').then(res => {
                return asyncContext.app.$axios.$get('/posts.json').then(res => {
                    const postsArray = []
                    // for (let key in res.data) {
                    //     postsArray.push({...res.data[key], id: key})
                    for (let key in res) {
                        postsArray.push({...res[key], id: key})
                    }
                    context.commit('setPosts', postsArray)
                }).catch(err => { 
                    context.error(err)
                    // console.log(err)
                });
            },
            setPosts(context, posts) {
                context.commit('setPosts', posts)
            },
            addPost(context, post) {
                const createdPost = {...post, updatedDate: new Date()}
                // return axios.post('https://nuxt-blog-a63f2.firebaseio.com/posts.json', createdPost).then(result => {
                return this.$axios.$post(`https://nuxt-blog-a63f2.firebaseio.com/posts.json?auth=${context.state.token}`, createdPost).then(result => {
                    // context.commit('addPost', {...createdPost, id: result.data.name})
                    context.commit('addPost', {...createdPost, id: result.name})
                }).catch(err => {
                    console.log(err)
                })
            },
            editPost(context, editedPost) {
                return axios.put(`https://nuxt-blog-a63f2.firebaseio.com/posts/${editedPost.id}.json?auth=${context.state.token}`, editedPost).then(() => {
                    context.commit('editPost', editedPost)
                }).catch(err => console.log(err))
            },
            authenticateUser(context, authData) {
                let authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbAPIKey}`
                if (authData.isLogin) {
                    authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbAPIKey}`
                } 
                return this.$axios.$post(authUrl, {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                }).then(result => {
                    context.commit('setToken', result.idToken)
                    localStorage.setItem('token', result.idToken)
                    localStorage.setItem('expirationDate', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000)
                    Cookie.set('jwt', result.idToken)
                    Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(result.expiresIn) * 1000)
                    // context.dispatch(setLogoutTimer, result.expiresIn * 1000)
                    return this.$axios.$post('http://localhost:3000/api/track-data', {data: 'Authenticated!'})
                }).catch(err => {
                    console.log(err)
                })
            },
            // setLogoutTimer(context, duration) {
            //     setTimeout(() => {
            //         context.dispatch('logout')
            //     }, duration);
            // },
            initAuth(context, req) {
                let token, expirationDate;
                if (req) {
                    if (!req.headers.cookie) {
                        return
                    }
                    const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
                    if (!jwtCookie) {
                        return
                    }
                    token = jwtCookie.split('=')[1]
                    expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate=')).split('=')[1]
                // } else {
                } else if (process.client) {
                    token = localStorage.getItem('token')
                    expirationDate = localStorage.getItem('expirationDate')
                }
                if (new Date().getTime() > Number.parseInt(expirationDate) || !token) {
                    console.log('no token or invalid token')
                    context.dispatch('logout')
                    return
                }
                context.commit('setToken', token)
            },
            logout(context) {
                context.commit('clearToken')
                Cookie.remove('jwt')
                Cookie.remove('expirationDate')
                if (process.client) {
                    localStorage.removeItem('token')
                    localStorage.removeItem('expirationDate')
                }
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            },
            isAuthenticated(state) {
                return state.token != null;
            }
        }
    })
}

export default createStore