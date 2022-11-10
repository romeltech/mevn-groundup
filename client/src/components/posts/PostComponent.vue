<template>
    <div>
        <div class="posts" v-if="posts.length > 0">
            <div class="post" v-for="post in posts" :key="post._id">
                <div>{{ post.text }}</div>
            </div>
        </div>
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
        async getPosts() {
            const response = await axios.get('http://localhost:5000/api/posts');
            console.log("response", response);
            this.posts = response.data;
        }
    },
    created() {
        this.getPosts();
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
  