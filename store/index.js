import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(context, asyncContext) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        context.commit('setPosts', [
                            {id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-High-Tech-Wallpaper.jpg'},
                            {id: '2', title: 'Second Post', previewText: 'This is our second post!', thumbnail: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-High-Tech-Wallpaper.jpg'}
                        ])
                        resolve() 
                    }, 1000)
                })
            },
            setPosts(context, posts) {
                context.commit('setPosts', posts)
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