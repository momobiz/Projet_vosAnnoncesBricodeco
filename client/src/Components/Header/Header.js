import React, {Fragment} from 'react';
import Navbarb from '../Navbarb/Navbarb';
import {Button, InputGroup, FormControl} from "react-bootstrap";
import logo_bricodeco from "../../Assets/logo_bricodeco2.png";
import "./header.css";
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'; 
import {logout} from '../../Redux/UserAction';



function Header({setMotsCle}) {

  const [valeurMotcle, setValeurMotcle]=useState('');
  const authState=useSelector(state=>state.authReducer); 
  const {isAuthenticated, loading}=authState; 
  const dispatch=useDispatch();

 const authLink=<div>
              
                <Link to="/user/dashboard"><Button variant="success" style={{marginRight:"7px"}}> Dashboard
                </Button></Link>
                 <Link to="/"><Button variant="danger" onClick={()=>dispatch(logout("au revoir"))}>Déconnexion
                <i className="fa fa-sign-out" aria-hidden="true" style={{marginLeft:"4px"}}></i>
               </Button></Link>
                </div>

const guestLink=<div>
                    <Link to="/user/inscription"><Button className="inscription" variant="success">S'inscrire</Button></Link>
                    <Link to='/user/connexion'> <Button variant="success">Connexion 
                    <i className="fa fa-user" aria-hidden="true" style={{marginLeft:"4px"}}></i>
                    </Button> </Link>
                </div>;


  return (
    <header className="header">
      <div className="row">
         <div className="header_button">
          
      {!loading && <Fragment> {isAuthenticated? authLink:guestLink} </Fragment>}   

      
     

        </div>
       </div>
       <div className="row">
            <div className="col-sm-12 recherche">
           <Link to="/"> <img src={logo_bricodeco} alt="bricodecoLogo" width="200px"
                          onClick={()=>setMotsCle('')}/></Link>
                
            <InputGroup className="col-sm-5">
                    <FormControl
                    placeholder="Rechercher..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className="champsRechercher"
                    id="chercher"
                    value={valeurMotcle}
                    onChange={ (e)=>setValeurMotcle(e.target.value)}
                    />
                    <InputGroup.Append>
                    <Button variant="outline-success"><i className="fa fa-search" aria-hidden="true" 
                   style={{color:"rgb(237,28,36)"}}
                   onClick={()=>{setMotsCle(document.getElementById('chercher').value);
                                setValeurMotcle('')}}
                   >
                    </i></Button>
                    </InputGroup.Append>
                </InputGroup>
           </div>

           </div>
           <Navbarb setMotsCle={setMotsCle}/>
          

      
   
    </header>
  );
}

export default Header;