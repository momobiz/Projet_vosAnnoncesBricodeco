import React, {useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../../Redux/UserAction'; 
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom"; 


const FormLogin = () => {
    const dispatch=useDispatch();
    const isAuthenticated=useSelector((state)=>state.authReducer.isAuthenticated); 
    console.log('isAuthenticated=>',isAuthenticated); 


    const [userData, setUserData]=useState({
        email:'',
        password:''
    })
    const reset=()=>{
        setUserData({
            email:'',
            password:''
        })
    }
    const handleSubmit=(e)=>{
       e.preventDefault();
        dispatch(loginUser(userData)); 
       
        
        reset(); 
     

    }

   if(isAuthenticated){
      return  <Redirect to="/user/dashboard"/>
   }


    return (
        <div>
        <Modal.Dialog  className="formUser" style={{position:"absolute", top:"40px", right:"40px" }}>


            <Modal.Title style={{color:"#28a745", marginLeft:"20px"}}>Connexion </Modal.Title>
            

            <Modal.Body>
            <Form onSubmit={handleSubmit}>
      
         <Form.Group controlId="formBasicEmail">
          
            <Form.Control type="email" placeholder="Enter email" size="lg" value={userData.email}
            onChange={(e)=>setUserData({...userData, email:e.target.value})}
            required
           />
          
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password"  size="lg" value={userData.password}
                onChange={(e)=>setUserData({...userData, password:e.target.value})}
                required
                />
        </Form.Group>

      
        <Button variant="success" type="Connexion" style={{marginRight:"10px"}}>
            Enter
        </Button>
        <Button variant="danger" type="reset" onClick={()=>reset()}>
            Reset
        </Button>
</Form>
    
    
</Modal.Body>



</Modal.Dialog>
        </div>


    );
    
}



export default FormLogin;

FormLogin.propTypes={
    isAuthenticated: PropTypes.bool
}