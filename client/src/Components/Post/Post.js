import React from 'react';
import {Card, Button} from "react-bootstrap";
import "./post.css";
import {Link} from 'react-router-dom';

const Post = ({post}) => {


    return (

        <Link to={`/postDescription/${post._id}`}>

        <Card style={{ width: '12rem' }} className="post">
            <Card.Img variant="top" src={'http://localhost:5000/'+post.photo}/>
            <Card.Body>
            <Card.Title className="carteTitre">{post.title}  </Card.Title>
            <Card.Text className="carteTexte">
                {`${post.price} DT`} <span className="professionnel"> Pro</span>
            </Card.Text>
            
            </Card.Body>
      </Card>
      </Link>
    );
}

export default Post;
