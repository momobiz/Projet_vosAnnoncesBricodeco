import React, {useState} from 'react';
import {ListGroup, Button} from 'react-bootstrap';
import {deletePost} from '../../Redux/PostAction';
import {useDispatch} from 'react-redux'
import FormPostUpdate from '../Form/FormPostUpdate';


const MyPostsCard = ({post}) => {

const dispatch=useDispatch();
const [updateAnnonce, setUpdateAnnonce]=useState(false);
console.log(updateAnnonce)



    const style={
        display:"flex",
        alignItems: "center",
        justifyContent:"space-between"

    }
    return (
         
            <ListGroup.Item style={{width:"39.9rem"} }>
            <div style={style}>
            <img src={"http://localhost:5000/"+post.photo} alt="picproduit" width="70px"/>
            <Button variant="success" style={{marginLeft:"55%"}} onClick={()=>setUpdateAnnonce(!updateAnnonce)}>Editer </Button> 
            <Button variant="danger"  style={{marginLeft:"10px"}} onClick={()=>dispatch(deletePost(post._id))}>Supprimer </Button> 
            </div>
            {updateAnnonce && <FormPostUpdate post={post}/>}
            </ListGroup.Item>
        
  

    );
}

export default MyPostsCard;
