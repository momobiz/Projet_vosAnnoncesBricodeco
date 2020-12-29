
import axios from 'axios'; 


export const  getPosts=()=>(dispatch)=>{
 axios.get('/posts/showposts')
 .then(res=>dispatch({ type:"FETCH_ALL_POSTS", payload:res.data}))
 .catch(error=>console.log(error))


}
export const createPost=(newPost)=>async(dispatch)=>{
   await axios.post('/posts/createpost', newPost)
    .then(res=>dispatch(getPosts()))
    .catch(error=>console.log(error))

}
export const deletePost=(postId)=>async(dispatch)=>{
    await axios.delete(`/posts/deletepost/${postId}`)
    //.then(res=>dispatch({type:"DELETE_POST", payload:postId}))
    .then(res=>dispatch(getPosts()))
    .catch(error=>console.log(error))

}

export const updatePost=(postId, updatePost)=>async(dispatch)=>{
    await axios.put(`/posts/updatepost/${postId}`, updatePost)
    .then(res=>dispatch(getPosts()))
    .catch(error=>console.log(error))
}


