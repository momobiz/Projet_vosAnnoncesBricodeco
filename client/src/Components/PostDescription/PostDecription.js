import React from 'react';
import {useSelector} from "react-redux"; 
import "./postDescription.css";
import {Card, ListGroup, Form} from 'react-bootstrap';

const PostDecription = ({match}) => {
    const posts=useSelector((state)=>state.postReducer); 
    const thePost=posts.find(post=>post._id===match.params.id);

   const nbCommentaire=thePost.comments.length;
   const tab=[2,3,4,5]; 


    return (
        <Card style={{ width: '50rem' }} className="postDescription">


    
             <Card.Title className="postHeadDesc">
            <Card.Img variant="top" src={'http://localhost:5000/'+ thePost.photo} className="imageDescription"/>
            <ListGroup variant="flush" className="listDescription">
                <ListGroup.Item> <span className="titleDesc"> Titre : </span> {thePost.title} </ListGroup.Item>
                <ListGroup.Item> <span className="titleDesc"> Catégorie : </span> {thePost.category.split('_').join(' ')} </ListGroup.Item>
                <ListGroup.Item> <span className="titleDesc"> Prix : </span> {thePost.price} DT </ListGroup.Item>
                <ListGroup.Item> <span className="titleDesc"> Contact : </span> {thePost.phone} </ListGroup.Item>
            </ListGroup>
            </Card.Title>
            <Card.Body>
           <span className="titleDesc">  Description :  </span>
                <Card.Text style={{border:"solid #5eaa14 1px"}}>
                  {thePost.description}
                </Card.Text>

             <Form.Group controlId="exampleForm.ControlTextarea1" >
                    <Form.Label> <span className="titleDesc"> Commentaires : </span> ({tab.length}) </Form.Label>
                    <ListGroup variant="flush">
                         {tab.map((commentaire,key)=><ListGroup.Item key={key}>{commentaire}</ListGroup.Item>)}

                    </ListGroup>
                      
                
            </Form.Group>
               
        
        </Card.Body>
  </Card>
    );
}

export default PostDecription;
