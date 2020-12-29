import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            
          
            <div className="footer1">
                <div className="elementFooter1 col-sm-3"></div>
                <div className=" col-sm-3">
                    <h4> A PROPOS DE NOUS </h4>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </div>
                <div className=" col-sm-3">
                <h4> INFORMATIONS LEGALES </h4>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </div>
            </div>
            <div className="footer2"> <i class="fa fa-copyright" aria-hidden="true"></i>
            &nbsp; GoMyCode 2020&nbsp;-&nbsp;All Rights Reserved
             </div>
        </div>
    );
}

export default Footer;
