import React, {useState} from 'react';
import {Form, Modal, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import  {updatePost} from '../../Redux/PostAction';

const FormPostUpdate = ({post}) => {
    const [postData, setPostData]=useState({
        description:"",
        price:'',
        phone:''

   
    })
    const reset=()=>{
        setPostData({
            description:"",
            price:'',
            phone:''
        })
    }
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(updatePost(post._id, postData))
        reset();

    }

    return (
        <div style={{display:"flex"}}>
             <Modal.Dialog style={{border:"2px #28a745 solid"}}>
                  

                    <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                            
                    

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" placeholder="Description" name="description"
                                 value={postData.description} onChange={(e)=>setPostData({...postData, description:e.target.value})}/>  
                            </Form.Group>
                            

                            <Form.Group>
                                    <Form.Row>
                                       <Form.Control size="lg" type="text" placeholder="prix" name="price"
                                       value={postData.price} onChange={(e)=>setPostData({...postData, price:Number(e.target.value)})} />
                                    </Form.Row>
                           </Form.Group>

                           <Form.Group>
                                    <Form.Row>
                                       <Form.Control size="lg" type="text" placeholder="Téléphone" name="phone"
                                       value={postData.phone} onChange={(e)=>setPostData({...postData, phone:Number(e.target.value)})} />
                                    </Form.Row>
                           </Form.Group>

                    
                          
                            <Button variant="success" type="submit" style={{marginRight:"10px"}}>
                                Submit
                            </Button>
                            <Button variant="danger" type="reset" onClick={()=>reset({})}>
                                Reset
                            </Button>
                    </Form>
                        
                        
                    </Modal.Body>

                   
            </Modal.Dialog >
         
            <Modal.Dialog  style={{marginLeft:"5px", border:"2px red solid", borderRadius:"30"}}>
                  

                  <Modal.Body>
                  
                          

                          <Form.Group controlId="exampleForm.ControlTextarea1">
                              <Form.Control as="textarea" placeholder="Description" name="description" readOnly
                             value={post.description} />  
                          </Form.Group>

                          <Form.Group>
                                  <Form.Row>
                                     <Form.Control size="lg" type="text" placeholder="prix" name="price" readOnly
                                     value={post.price}  />
                                  </Form.Row>
                         </Form.Group>

                         <Form.Group>
                                  <Form.Row>
                                     <Form.Control size="lg" type="text" placeholder="Téléphone" name="phone" readOnly
                                     value={post.phone}  />
                                  </Form.Row>
                         </Form.Group>

                  
                        
            
                      
                      
                  </Modal.Body>

                 
          </Modal.Dialog>
        </div>
    );
}

export default FormPostUpdate;
