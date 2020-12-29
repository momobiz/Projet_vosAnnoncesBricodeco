
import React, {useState} from 'react';
import './formUser.css';
import {Modal, Form, Button,Alert} from 'react-bootstrap'; 
import {useDispatch, useSelector} from 'react-redux'; 
import {createUser} from '../../Redux/UserAction';

import {registerUser} from '../../Redux/UserAction';
import {Redirect} from 'react-router-dom'; 
import {PropTypes} from 'prop-types'; 
  
// formulaire d inscription de l utilisateur 

const FormUser = () => {
    const users=useSelector(state=>state.userReducer);
    const isAuthenticated=useSelector((state)=>state.authReducer.isAuthenticated); 
    console.log('isAuthenticated=>',isAuthenticated); 


    const [etat, setEtat]=useState(false);
    const [userData, setUserData]=useState({
        userName:'',
        email:'',
        password:'',
        phone:'',
        city:'',
        professionnal:false

    })
    const dispatch=useDispatch();
  
 /*const handleSubmit=(e)=>{
     e.preventDefault();
    const verifUser=users.find(user=>user.email===userData.email);
    
    verifUser?setEtat(true):setEtat(false);
    
     dispatch(createUser(userData)); 
     reset();

 }*/
 const handleSubmit=(e)=>{
     e.preventDefault();
     dispatch(registerUser(userData)); 

     reset();
    
   


 }



    const reset=()=>{
        setUserData({
            userName:'',
            email:'',
            password:'',
            phone:'',
            city:'',
            professionnal:false
        })
    }
    
  if(isAuthenticated){
     return <Redirect to="/user/dashboard"/>
  }
    
    return (
        <div>
         
             <Modal.Dialog  className="formUser" style={{position:"absolute", top:"40px", right:"175px", zIndex:"3" }}>

                    <Modal.Title style={{color:"#28a745", marginLeft:"20px"}}>Créer votre Compte </Modal.Title>
                    {/*etat?(<Alert  variant="danger"> This email is already used </Alert>):(<></>)*/}

                    <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicUserName">
                                 <Form.Control size="lg" type="text" placeholder="UserName" value={userData.userName} name="userName"
                                 onChange={(e)=>setUserData({...userData, userName:e.target.value})}
                               
                                 />
                             </Form.Group>
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

                            <Form.Group>
                                 <Form.Row>
                                 <Form.Control size="lg" type="text" placeholder="Phone" name="phone" value={userData.phone}
                                      onChange={(e)=>setUserData({...userData, phone:Number(e.target.value)})}
                                     
                                      />
                                </Form.Row>
                           </Form.Group>

                           <Form.Group>
                                <Form.Control as="select" size="lg"  name="city" value={userData.city}
                                onChange={(e)=>setUserData({...userData, city:e.target.value})}
                                >
                                    <option>Ville</option>
                                    <option value="bizerte"> Bizerte</option>
                                    <option value="tunis">Tunis</option>
                                    <option value="sousse"> Sousse</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                            <Form.Group controlId="exampleForm.SelectCustomm">
                            Etes vous un professionnel?
                                            <Form.Control as="select" custom  value={userData.professionnal}
                                onChange={(e)=>setUserData({...userData, professionnal:e.target.value})}>
                                            
                                            <option value={true}>True</option>
                                            <option value={false}>False</option>
                                            
                                        
                                            </Form.Control>
                        </Form.Group>
                               

                                     
                              </Form.Group>
                           
                            <Button variant="success" type="Sign up" style={{marginRight:"10px"}}>
                                Register
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


export default FormUser;

FormUser.propTypes={
    isAuthenticated:PropTypes.bool
}