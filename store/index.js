import Vuex from 'vuex';
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
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
                return this.$axios.$post('https://nuxt-blog-a63f2.firebaseio.com/posts.json', createdPost).then(result => {
                    // context.commit('addPost', {...createdPost, id: result.data.name})
                    context.commit('addPost', {...createdPost, id: result.name})
                }).catch(err => {
                    console.log(err)
                })
            },
            editPost(context, editedPost) {
                return axios.put(`https://nuxt-blog-a63f2.firebaseio.com/posts/${editedPost.id}.json`, editedPost).then(() => {
                    context.commit('editPost', editedPost)
                }).catch(err => console.log(err))
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore