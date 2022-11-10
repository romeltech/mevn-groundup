import axios from "axios";

const url = "http://localhost:5000/api/posts/";

class PostService {
  // get posts
  static getPosts() {
    // return new Promise(async function (resolve, reject) {
    //   // do async thing
    //   const res = await fetch(url);

    //   // your custom code
    //   console.log("Yay! Loaded:", url);

    //   // resolve
    //   resolve(res.json()); // see note below!
    // });

    // let data = [];
    // const response = axios.get(url);
    // if (response) {
    //   data = response;
    // }
    // console.log('getPosts', data);
    // return data;
    // data = response.data;
    // console.log(data);
    // return data

    // return new Promise( (resolve, reject) => {
    //   try {
    //     const res = axios.get(url);
    //     const data = res.data;
    //     console.log("new Promise", data);
    //     resolve(
    //       //   data.map((p) => {
    //       //     console.log(p);
    //       //     return p.text;
    //       //   })
    //       data.map((post) => ({
    //         ...post,
    //         createdAt: new Date(post.createdAt),
    //       }))
    //     );
    //   } catch (err) {
    //     reject(err);
    //   }
    // });
  }

  // create post
  static insertPost(text) {
    return axios.post(url, { text });
  }

  // delete post
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
