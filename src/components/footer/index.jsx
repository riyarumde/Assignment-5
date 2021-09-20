import React from 'react';
import Finder from "../../resources/images/logo.png"
export default function Footer() {
    return (
        <div class="riya">           
            <div className="row justify-content-center">
                <div  className="col-2 mt-5 mx-50 px-50">
                <img className="img-fluid footImg" src={Finder} alt="" />
            <p className="logot text-uppercase">DIETBET</p>
                </div>
                <div className="col-4 mt">
                    
                    <div className="row">
                        <div className="col-6">
                            <div style={{marginLeft:"90px"}}>
                            <h4> <strong> COMPANY </strong></h4>
                            <ul style={{listStyle:"none",fontSize:"17px",padding:"0",align:"center"}}>
                                <li>HOME</li>
                                <li>ABOUT US </li>
                                <li>RESOURCES</li>
                                <li>CONTACT US</li>
                            </ul>
                            </div>
                            
                        </div>
                        <div className="col-6">
                        <ul style={{listStyle:"none",fontSize:"17px",padding:"0",marginTop:"40px"}}>
                                <li>PG ALERTS</li>
                                <li> TESTIMONIALS</li>
                                <li>MEDIA</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-4 mt">
                    <div className="row">
                        <div className="col-5">
                            <h4><strong> PHONE NO. AND EMAIL </strong></h4>
                            <div> &nbsp;+91-222222222</div>
                            <div> riyarumde@gmail.com</div>
                        </div>
                        <div className="col-6 d-flex">
                            
                            <h4 ><strong>FOLLOW US 
                                    <p>  <i class="fa fa-facebook"></i>  <i class="fa fa-instagram"></i> <i class="fa fa-youtube"></i></p>  
                                    
                                 </strong> </h4>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}