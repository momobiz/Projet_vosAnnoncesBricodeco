import React, {useState} from 'react';
import {Button, Modal, Form} from "react-bootstrap"; 
import "./formPost.css"; 

import {useDispatch} from 'react-redux'
import { createPost} from "../../Redux/PostAction";

const FormPost = () => {
    const dispatch=useDispatch();

    const [postData, setPostData]=useState({
        title:'',
        category:'',
        price:'',
        
        photo:'',
        description:'',
        phone:'',
        city:''


    })
    
   

    


    const plantes=["Arbres", "Arbustes", "Plantes d intérieur"];
    const outillages=[ "Outils de Jardinage", "Outils de Bricolage"];
    const entretiensJardin=["Engrais et Persticide", "Services"];
    const mobiliersJardin=["Salons de Jardin", "Meubles Divers"];
    const articlesDecorations=[ "Pots et Bacs","Balustrades Fontaines et Autres", "Eclairage", "Accessoires divers"];

    const categories=[[], plantes, outillages, entretiensJardin, mobiliersJardin, articlesDecorations];
    var liste2=document.getElementById("liste2");
      const viderListe=()=>{
        if(liste2.length>0){
             for(let k=liste2.length-1; k>=0;k--){
                liste2.remove(k);
             }
        }

     }
    const charger=()=>{
        const i=document.getElementById("category").selectedIndex;
        console.log('selected index=>', i);
            viderListe(); 
            for(let j=0; j<categories[i].length; j++){
            let e=document.createElement('option');
            e.text=categories[i][j];
            e.value=(categories[i][j]).toLowerCase().split(' ').join('_');
            liste2.add(e,null); 
        }
    }

    /*************************************************** */

    

    const handleSubmit=(e)=>{
        
        e.preventDefault();
        const formData=new FormData();
        Object.keys(postData).forEach(key=>formData.append(key, postData[key]));
        dispatch(createPost(formData));
        reset();
       
        
        }
    const reset=()=>{
        setPostData({
            category:'',
            title:'',
            photo:'',
            description:'',
            price:'',
            phone:'',
           
            city:''
        });
        viderListe();
        
         
    }
    
    


    return (
        <div>
            
           
            <Modal.Dialog >
                    <Modal.Header closeButton>
                        <Modal.Title style={{color:"#28a745"}}>Créer votre annonce </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                 <Form.Control size="lg" type="text" placeholder="Titre" name="title"
                                 value={postData.title} onChange={(e)=>setPostData({...postData, title:e.target.value})} />
                             </Form.Group>

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

                            <Form.Group >
                                <Form.Control as="select" id="category"  onChange={()=>charger()}>
                                <option> Categories </option>
                                <option>Plantes</option>
                                <option>Outillages </option>
                                <option>Entretien jardin </option>
                                <option>Mobilier Jardin</option>
                                <option>Articles de décorations</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control as="select" id="liste2" value={postData.category} name="category"
                                 onChange={(e)=>setPostData({...postData, category:(e.target.value) })}>
                            
                                </Form.Control>
                           </Form.Group>

                           <Form.Group>
                                    <Form.Row>
                                       <Form.Control size="lg" type="text" placeholder="Téléphone" name="phone"
                                       value={postData.phone} onChange={(e)=>setPostData({...postData, phone:Number(e.target.value)})} />
                                    </Form.Row>
                           </Form.Group>

                           <Form.Group>
                                <Form.Control as="select" size="lg" value={postData.city} name="city"
                                onChange={(e)=>setPostData({...postData, city:e.target.value})}>
                                    <option>ville</option>
                                    <option value="bizerte"> Bizerte</option>
                                    <option value="tunis">Tunis</option>
                                    <option value="sousse"> Sousse</option>
                                </Form.Control>
                            </Form.Group>


                           <Form.Group>

                              {/* <Form.File id="exampleFormControlFile1" label=" Ajouter une photo" value={postData.photo} 
                               onChange={(e)=>setPostData({...postData, photo:e.target.value})}
    />*/}
    <input type="file" name="photo" onChange={(e)=>setPostData({...postData, photo:e.target.files[0]})}/>
                                
                           </Form.Group>




                          
                            <Button variant="success" type="submit" style={{marginRight:"10px"}}>
                                Submit
                            </Button>
                            <Button variant="danger" type="reset" onClick={()=>reset({})}>
                                Reset
                            </Button>
                    </Form>
                        
                        
                    </Modal.Body>

                   
            </Modal.Dialog>
            
        </div>
    );
}

export default FormPost;
