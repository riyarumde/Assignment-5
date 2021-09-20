import React from 'react'
import Img from "../../resources/images/chart.jpeg"
export default function card1() {
    return (
        <div>
         <div className="row">
           <div className="col-6 custom-card-img">
              <img src={Img} alt="" className="img-fluid" /> 
               </div>  
           <div className="col-6" style={{backgroundColor:  "rgb(240, 161, 171)"}}>
         <div className="row">
<div className="col-12">
    <h1>Track Nutritions</h1>
</div>
<div className="col-12">
    <p>Maintain a healthy diet by tracking your consumption of nutritionsband calories on the basis of your orders...know more.Food journaling is one of the most powerful things you can do to reach your healthy eating goals. Tracking what you eat and drink each day can: Make you more aware of what and when you eat. Help you discover your personal eating patterns and habits...<b>Know more.</b></p>
</div>
<div className="col-12">

    <div className="btn"></div>
    <button className="btn btn-outline-success custom-card-btn" >GET STARTED</button>
</div>



         </div>


           </div>
             </div>   
        </div>
    )
}
