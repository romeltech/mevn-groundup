<template>
    <div>
        <div class="posts" v-if="posts.length > 0">
            <div class="post" v-for="post in posts" :key="post._id">
                <div>{{ post.text }}</div>
            </div>
        </div>
        <button type="button" @click="getLocalPosts">Get local posts</button>
        <button type="button" @click="getPosts">Get live posts</button>
    </div>
</template>
  
<script>
// import PostService from '@/services/PostServices';
import axios from 'axios'
export default {
    name: 'PostComponent',
    data() {
        return {
            posts: [],
            error: '',
            text: ''
        }
    },
    methods: {
        async getLocalPosts() {
            const response = await axios.get('http://localhost:5000/api/posts');
            console.log("response", response);
            this.posts = response.data;
        },
        async getPosts() {
            const response = await axios.get('http://mevn-groundup.melinfinity.com/api/posts');
            console.log("response", response);
            this.posts = response.data;
        }
    },
    created() {
        console.log('created');
    }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  