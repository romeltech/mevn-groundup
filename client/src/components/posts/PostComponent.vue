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
            await axios.get('http://localhost:5000/api/posts', {
                headers: { 'Content-Type': 'application/json' }
            }).then((response) => {
                this.posts = response.data
            }).catch((error) => {
                console.log(error);
            });
        },
        async getPosts() {
            await axios.get("https://mevn-vue.melinfinity.com/api/posts", {
                headers: { 'Content-Type': 'application/json' }
            }).then((response) => {
                this.posts = response.data
            }).catch((error) => {
                console.log(error);
            });
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
  