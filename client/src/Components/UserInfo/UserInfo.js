import React,{useState, useEffect, Fragment} from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import FormPost from '../Form/FormPost';
import './userInfo.css'; 

const UserInfo = ({profile}) => {

 const [creationAnnonce, setCreationAnnonce]=useState(false);
 const {_id, userName, phone, city, email, avatar, professionnal}=profile;
   


    return (
        <div>
            
          
      <Card style={{ width: '40rem', marginLeft:"20px" }} className="userDescription">

            <Card.Title className="postHeadDesc">
            <Card.Img variant="top" src={avatar} className="imageDescription"/>
            <ListGroup variant="flush" className="listUserDescription">
            <ListGroup.Item> <span className="userTitle"> UserName : </span> {userName} </ListGroup.Item>
            <ListGroup.Item> <span className="userTitle"> Email : </span>{email}  </ListGroup.Item>
            <ListGroup.Item> <span className="userTitle"> Phone : </span> {phone} </ListGroup.Item>
            <ListGroup.Item> <span className="userTitle"> City : </span> {city}  </ListGroup.Item>
            <ListGroup.Item> <span className="userTitle"> Professionnel : </span> {professionnal?'oui':'non'} </ListGroup.Item>
            <ListGroup.Item> <span className="userTitle"> Nombre d'annonces : </span>  </ListGroup.Item>
            </ListGroup>
            </Card.Title>
            <Card.Body>
           <Button variant="success" onClick={()=>setCreationAnnonce(!creationAnnonce)}>Ajouter une annonce</Button>
            </Card.Body>

           
</Card>
        {creationAnnonce && <Fragment><FormPost/> </Fragment>}
            

            
        </div>
    );
}

export default UserInfo;

