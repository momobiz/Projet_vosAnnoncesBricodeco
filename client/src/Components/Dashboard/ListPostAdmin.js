import React from 'react';
import {ListGroup, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {deletePost} from '../../Redux/PostAction';

const ListPostAdmin = ({post}) => {
    const publieDepuis=Math.floor((Date.now()-Date.parse(post.publishedAt))/(1000*24*60*60));
    const dureeDevie=3;
    const expirationDans=dureeDevie-publieDepuis; 
    const dispatch=useDispatch();

    const style={
        display:"flex",
        justifyContent:"space-between"


    }
    return (
        
    <ListGroup.Item style={style}> 
    <img src={"http://localhost:5000/"+post.photo} alt="picproduit" width="70px"/>
    <span>
     <span style={{marginRight:"10px"}}>{ expirationDans<=0? (<span style={{color:"#f60002", fontWeight:"bold"}}> Annonce expirée </span>):(<span> Expire dans {expirationDans} jours </span>)}</span>
     <Button variant="success" onClick={()=>dispatch(deletePost(post._id))}>Supprimer</Button>
     </span>
     </ListGroup.Item>
        
    );
}

export default ListPostAdmin;
