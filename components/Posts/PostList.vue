<template>
    <section class="post-list">
        <PostPreview id="1" thumbnail="https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-High-Tech-Wallpaper.jpg" title="Hello there!" previewText="This is my first post!" :is-admin="isAdmin" />
        <PostPreview id="2" thumbnail="https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-High-Tech-Wallpaper.jpg" title="Hello there - second!" previewText="This is my second post!" :is-admin="isAdmin" />
        <PostPreview id="3" thumbnail="https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-High-Tech-Wallpaper.jpg" title="Hello there - third!" previewText="This is my third post!" :is-admin="isAdmin" />
    </section>
</template>

<script>
    import PostPreview from '@/components/Posts/PostPreview.vue'

    export default {
        components: {
            PostPreview
        },
        props: {
            isAdmin: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    .post-list {
        display: flex;
        padding: 20px;
        box-sizing: border-box;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
</style>