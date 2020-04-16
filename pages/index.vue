<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
  import PostList from '@/components/Posts/PostList.vue'

  export default {
    // data() {
    //   return {
    //     loadedPosts: []
    //   }
    // },

    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      }
    },

    // asyncData(context) {
    //   console.log(context)
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve({
    //         loadedPosts: [
    //           {id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-High-Tech-Wallpaper.jpg'},
    //           {id: '2', title: 'Second Post', previewText: 'This is our second post!', thumbnail: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-High-Tech-Wallpaper.jpg'}
    //         ]
    //       })
    //       // reject(new Error('an error occured'))
    //     }, 1500)
    //   }).then(data => data).catch(err => {
    //     context.error(err)
    //   })
    // },

    // asyncData(context, callback) {
    //   console.log(context)
    //   setTimeout(() => {
    //     callback(null, {
    //  // callback(new Error('error occured'), {
    //       loadedPosts: [
    //         {id: '1', title: 'First Post', previewText: 'This is our first post!', thumbnail: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-High-Tech-Wallpaper.jpg'},
    //         {id: '2', title: 'Second Post', previewText: 'This is our second post!', thumbnail: 'https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-High-Tech-Wallpaper.jpg'}
    //       ]
    //     })
    //   }, 1500)
    // },

    components: {
      PostList    
    }
  }
</script>

<style scoped>
  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-position: center;
    background-size: cover;
    background-image: url('~assets/images/main-page-background.jpg');
  }

  .intro h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    font-size: 1.5rem;
    color: black;
    background-color: rgb(211, 211, 211);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
    box-sizing: border-box;
    border: 1px solid black;
  }

  @media (min-width: 768px) {
    .intro h1 {
      font-size: 2rem;
    }
  }

  /* .featured-posts {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  } */
</style>
