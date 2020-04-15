<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>

<script>
    import AdminPostForm from '~/components/Admin/AdminPostForm'

    export default {
        layout: 'admin',
        data() {
            return {
                loadedPost: {
                    author: 'Max',
                    title: 'Post title',
                    content: 'Some Content',
                    thumbnailLink: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-High-Tech-Wallpaper.jpg'
                }
            }
        },
        components: {
            AdminPostForm
        }
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