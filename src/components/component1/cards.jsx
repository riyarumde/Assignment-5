import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

export default function Cards(props) {
    return (
        <div className="card cuystom-card-2" style={{width:"18rem"}}>
          <img src={props.src} class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title ">{props.title}</h5>  
    <p className="card-text ">{props.desc}</p>    
    <ProgressBar completed={props.val} bgColor="#f5f5f5" baseBgColor="#db3330" labelColor="#000" />
  </div>
</div>
    )
}