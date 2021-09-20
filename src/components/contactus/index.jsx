import React from "react";
import Img from "../../resources/images/mangosplash1.png"

export default function ConatctUs() {
	return (
		<div>
			<div  className="row custom-misc-2-con-chart" style={{position:"relative"}}>
				<div className="col-6" >
					<h1>
						YOU CAN POST YOUR QUERIES HERE!!...
						<br/></h1>
						
					

					<div style={{ margin: "25px 0 25px 0" }} className="line2"></div>

					<form action="">
						<div className="row p-2">
							<div className="col-6">
								<input
									type="text"
									placeholder="Full name"
									
								/>
							</div>
							<div className="col-6">
							
                                <input type="email" placeholder="Email"  />
                               
						
                               
                                
                                	</div>

								</div>
                                <div className="row p-2">
                                <div className="col-6">
								<input type="text" placeholder="Address" />
							</div>
							<div className="col-6">
								<input type="tel" name="" id="" placeholder="Phone" />
							</div>
					
                                </div>

						<div className="row p-2">
							<div className="col-12">
								<textarea
									name=""
									id=""
									style={{ width: "78%" }}
									placeholder="description"
								>
									Default value
								</textarea>
							</div>
							<div className="col-12">
								<button className="btn btn-primary pill" type="submit">CONTACT</button>
							</div>
			
						</div>

					
					</form>
				</div>
			<img src={Img} alt="" className="transaprent-kid" />
            
            </div>
		</div>
		
	
	);
}