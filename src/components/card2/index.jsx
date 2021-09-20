import React from 'react';
import Card from 'C:/Users/Neeta Bagkar/Desktop/htmlproject/MYNEWPROJECT/diet/src/components/component1/cards.jsx';
let array=
    [
        {
            src: "https://picsum.photos/200/300",           
            title:"POTATO FRIES",
            desc:"French fries have a lot of fat and salt that could raise the risk of cardiovascular disease. ... High consumers of French fries might also be high consumers of other high-fat or high-salt foods, sweetened beverages, and red meat.",
            val:71
        },
        {
            src: "https://picsum.photos/200/300",            
            title:"DONUTS",
            desc:"doughnuts contain high amounts of sugar, refined flour, and added fats. They can be extremely high in calories. To keep your weight in check, you should limit your intake. When cravings strike, go for a small, single serving, not a giant cookie or a whole pack of little ones.",
            val:67
        },
        {
            src: "https://picsum.photos/200/300",
            title:"BURGERS",
            desc:"According to nutritionist burger is unhealthy /junk food. Because it contains loads of saturated and unsaturated fats. It contains lots of calories and cholesterol which is are not good for health. It leads to so many serious diseases like high blood pressure, stroke, kidney disease, obesity.",
            val:94
        }
    ]

export default function card2() {
    return (
        <div className="card3">
            <div className="card-heading2 pt-5">
                <h1 className="text-uppercase text-center display-6 text-black" > <strong>  HOW MUCH JUNK FOOD CAN AFFECT YOUR BODY? </strong></h1>  
            </div>
            <div className="d-flex justify-content-center">
                <span className="card-span" ></span>
            </div>
            <div className="card-para-2 text-center" >
            One of the most common side-effects of consuming junk foods is increased obesity. It's composition of loads of sugar, calories and fats contribute to weight-gain. Obesity can cause many medical issues like diabetes, joint-pain and heart diseases.
            </div>
            <br/>
            <br/>
            <br/>
            <div className="row">
                <div style={{fontSize:"14px"}} className="col-12">
                    
                    <div  className="d-flex justify-content-evenly">
                        {
                            array.map(data=>{
                                return(
                                <Card src={data.src} title={data.title} desc={data.desc} val={data.val} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}