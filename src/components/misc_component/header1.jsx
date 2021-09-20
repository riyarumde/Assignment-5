import React from 'react'
import Logo from "../../resources/images/logo.png"
import {ReactComponent as Logo2}  from "../../resources/images/logo.png"

export default function Header1() {
    return (
        <div>
            <div className="col-12 text-center">
            <img src={Logo} alt=""width="100px" height="100px" className="custom-logo img-thumbmail"/> 

            </div>
            <div className="col-12">
            <h1 className="custom-misc-h1-1 text-secondary text-center">
            <span>50,000+ number of followers are with us....</span> 
					</h1>

            </div>
        </div>
    )
}

