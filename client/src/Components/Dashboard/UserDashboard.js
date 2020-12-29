import React, {Fragment, useEffect, useState} from 'react';
import UserInfo from '../UserInfo/UserInfo';
import {useSelector, useDispatch} from 'react-redux'; 
import { getCurrentProfile, loadUser} from '../../Redux/UserAction';
import FormPost from '../Form/FormPost';
import Spinner from './Spinner';
import {Card, Button, ListGroup} from 'react-bootstrap';
import './userDashboard.css';
import MyPosts from '../Posts/MyPosts';
import FormPostUpdate from '../Form/FormPostUpdate'
import ListPostAdmin from './ListPostAdmin';


const UserDashboard = () => {

    const dispatch=useDispatch();
    useEffect(()=>{
       dispatch(getCurrentProfile());
     
    }, [dispatch])

    const  profileInfo=useSelector(state=>state.profileReducer);
    const [creationAnnonce, setCreationAnnonce]=useState(false);
    const [voirAnnonces, setVoirAnnonces]=useState(false);
    const [nbAnnonce, setNbAnnonce]=useState(0); 
    const ListPost=useSelector(state=>state.postReducer); 
  
   console.log('posts=>', ListPost)
    const {profile, loading}=profileInfo;

    
    return (
        <div>

            <h3 style={{color:"#f60002", marginTop:"25px", marginLeft:"50px"}}> Bienvenu à votre UserDashboard </h3>
           
         {  (loading && profile===null)? (<Spinner/> ):(<Fragment>

            
             
            <Card style={{ width: '40rem', marginLeft:"20px" }} className="userDescription">

            <Card.Title className="postHeadDesc">
            <Card.Img variant="top" src={profile && profile.avatar} className="imageDescription"/>
            <ListGroup variant="flush" className="listUserDescription">
            <ListGroup.Item> <span className="userTitle"> UserName : </span>{profile && profile.userName} </ListGroup.Item>
            <ListGroup.Item> <span className="userTitle"> Email : </span>{profile && profile.email}  </ListGroup.Item>
            <ListGroup.Item> <span className="userTitle"> Phone : </span> {profile && profile.phone} </ListGroup.Item>
            <ListGroup.Item> <span className="userTitle"> City : </span>{profile && profile.city} </ListGroup.Item>
    { (profile && profile.userName!=='admin') && 
            <ListGroup.Item> <span className="userTitle"> Professionnel : </span>{(profile && profile.professionnal)? 'Oui ':' Non'}  </ListGroup.Item>
     }{ (profile && profile.userName!=='admin') && 
            <ListGroup.Item> <span className="userTitle"> Nombre d'annonces : </span> {profile&&nbAnnonce} </ListGroup.Item>
    }   
            </ListGroup>
            </Card.Title>
{(profile && profile.userName!=='admin') && 
            <Card.Body>
                <Button variant="success" onClick={()=>{setCreationAnnonce(!creationAnnonce);
                                                       voirAnnonces && setVoirAnnonces(!voirAnnonces)}}>Ajouter une annonce</Button>
                <Button variant="success" onClick={()=>{setVoirAnnonces(!voirAnnonces);
                                                        creationAnnonce && setCreationAnnonce(!creationAnnonce)}} style={{marginLeft:"10px"}}>Mes annonces</Button>
           </Card.Body>
}
           
</Card>
         
            {creationAnnonce && <div className="creationAnnonce"> <FormPost/> </div>}
            {voirAnnonces && <div> <MyPosts profile={profile}  setNbAnnonce={ setNbAnnonce} /></div>}
     

{(profile && profile.userName==='admin') &&  <ListGroup className="listPostAdmin">
     <ListGroup.Item className="titreListAdmin">Listes de toutes les Annonces </ListGroup.Item>
     { ListPost.map(post=><ListPostAdmin post={post} key={post._id}/>) }
     </ListGroup> }

       

           </Fragment>)}
           
           
        </div>
    );
}

export default UserDashboard;
