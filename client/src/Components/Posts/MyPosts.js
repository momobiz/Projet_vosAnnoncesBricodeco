import React from 'react';
import {useSelector} from "react-redux"; 
import {ListGroup} from "react-bootstrap";
import MyPostsCard from "./MyPostsCard";
import './myPosts.css';

const MyPosts = ({profile, setNbAnnonce}) => {

const posts=useSelector(state=>state.postReducer);
const id=profile&&profile._id;
setNbAnnonce(posts.filter(post=>post.idUser===id).length);

    return (
        <ListGroup className="myPosts">
            <ListGroup.Item style={{fontWeight:"bold", textAlign:'center', color:"#f60002", fontStyle:"italic" }}> Ma liste d'annonces </ListGroup.Item>
           {posts.filter(post=>post.idUser===id).map((post)=> <MyPostsCard post={post} 
                                                                    key={post._id}/>)}

        </ListGroup>
    );
}

export default MyPosts;
