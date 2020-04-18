<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts" />
    </div>
</template>

<script>
    // import PostList from '@/components/Posts/PostList.vue'

    export default {
        // components: {
        //     PostList
        // },
        
        // fetch(context) {
        //     if (context.store.state.loadedPosts.length > 0) {
        //         return null
        //     }
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             resolve({
        //                 loadedPosts: [
        //                 {id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-High-Tech-Wallpaper.jpg'},
        //                 {id: '2', title: 'Second Post', previewText: 'This is our second post!', thumbnail: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-High-Tech-Wallpaper.jpg'}
        //                 ]
        //             }) 
        //         }, 1000)
        //     }).then(data => {
        //         // return data;
        //         context.store.commit('setPosts', data.loadedPosts)
        //     }).catch(err => {
        //         context.error(err)
        //     })
        // },

        // asyncData(context) {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             resolve({
        //                 loadedPosts: [
        //                 {id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-High-Tech-Wallpaper.jpg'},
        //                 {id: '2', title: 'Second Post', previewText: 'This is our second post!', thumbnail: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-High-Tech-Wallpaper.jpg'}
        //                 ]
        //             }) 
        //         }, 1000)
        //     }).then(data => {
        //         return data;
        //     }).catch(err => {
        //         context.error(err)
        //     })
        // },
        // created() {
        //     this.$store.dispatch('setPosts', this.loadedPosts)
        //     console.log(this.$store.getters.loadedPosts);
        // }

        computed: {
            loadedPosts() {
                return this.$store.getters.loadedPosts
            }
        }
    }
</script>

<style scoped>
    .posts-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>