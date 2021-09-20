import React from "react";

export default function bar() {

 var array1 = [
    { name: "MILK", val: 30 },
    { name: "CEREAL", val: 40 },
    { name: "YOGURT", val: 50 },
    { name: "EGGS", val: 60 },
]



	return (
		<div>
			<div className="row custom-misc-2-con-chart">
				<div className="col-5">
					<h1>How much proteins does your food contain?</h1>
					<h3>Lets have a look below:</h3>
					<ul style={{ color: "rgb(255, 0, 64)" }}>
						{["Milk", "Cereal", "Yougurt", "Eggs",].map((data)=><li>{data}</li>)}
					</ul>

					<button
						className="btn btn-success"
						style={{ backgroundColor: "rgb(21, 88, 15)", borderRadius: "30px" }}
					>
						MORE
					</button>
				</div>
				<div className="col-7">
					<div className="heignt-creator">
						{/* array of objects */}

						{array1.map((data) => {
							return (
								<div className="con-chart">
									<div className="bar-chart" style={{ height: `${data.val}%` }}>
										<div>{data.val}%</div>
										<p>{data.name}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}