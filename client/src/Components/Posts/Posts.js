import React from 'react';
import Post from '../Post/Post';
import {useSelector} from 'react-redux';
import "./posts.css";



const Posts = ({motsCle, match}) => {
    const postsList=useSelector((state)=>state.postReducer);
   
    console.log(postsList);

     match? console.log(match.params.categorie): console.log('non');


    return (

        <div className="postsContainer">
           
           { !match? (postsList.filter(post=>(post.title && post.title.toLowerCase().includes(motsCle.toLowerCase()) ))
           .map((post, key)=><Post post={post} key={key}/>))
           :

           ( postsList.filter(post=>(post.category===match.params.categorie)).map((post, key)=><Post post={post} key={key}/>))

           



            }
           
            
                
            
        </div>
    );
}

export default Posts;
