<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
        </section>
    </div>
</template>

<script>
    import AdminPostForm from '~/components/Admin/AdminPostForm'
    import axios from 'axios'

    export default {
        layout: 'admin',
        data() {
            return {
                // loadedPost: {
                //     author: 'Max',
                //     title: 'Post title',
                //     content: 'Some Content',
                //     thumbnailLink: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-High-Tech-Wallpaper.jpg'
                // }
            }
        },
        asyncData(context) {
            return axios.get(`${process.env.baseUrl}/posts/${context.params.postId}.json`).then(res => {
                return {
                    loadedPost: {...res.data, id: context.params.postId}
                }
            }).catch(err => context.error(err));
        },
        components: {
            AdminPostForm
        },
        methods: {
            onSubmitted(editedPost) {
                // axios.put(`https://nuxt-blog-a63f2.firebaseio.com/posts/${this.$route.params.postId}.json`, editedPost).then(res => {
                //     this.$router.push('/admin')
                // }).catch(err => console.log(err))

                this.$store.dispatch('editPost', editedPost).then(() => {
                    this.$router.push('/admin')
                })
            }
        },
        middleware: ['check-auth', 'auth']
    }
</script>

<style scoped>
    .update-form {
        width: 90%;
        margin: 20px auto;
    }
    @media (min-width: 768px) {
        .update-form {
            width: 500px;
        }
    }
</style>