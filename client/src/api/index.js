import axios from 'axios';
const url='http://localhost:5000/posts/showposts';
const url2='http://localhost:5000/posts/createpost1';


export const fetchPosts=()=>{
    axios.get(url);

  
     
   
}
export const createPost=(newPost)=>{
    axios.post(url2, newPost);
}