import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Teamslider() {
    const [Xyz, setXyz] = useState([9, "po", { Lk: "po" }]);
    console.log({ state: Xyz });
    const normal = () => {
        setXyz(56)
    }

    var arr2 = [
        { link: "https://i0.wp.com/theeverykitchen.com/wp-content/uploads/2015/06/Basic-Overnight-Steel-Cut-Oats-5.jpg?resize=680%2C490"},
        { link: "https://www.funfoodfrolic.com/wp-content/uploads/2020/09/Sprout-Salad-Thumbnail.jpg"},
        { link: "https://i.pinimg.com/originals/dd/61/c7/dd61c78ae555b9deee3fba64f3f23c9c.jpg" },
        { link: "https://i0.wp.com/kidseatbyshanai.com/wp-content/uploads/2017/02/one_tray_oven_baked_salmon.jpg" },
        { link: "https://www.sweetstreet.com/wp-content/uploads/2018/06/carrotcake_cropped_hires.jpg" },
        { link: "https://thumbs.dreamstime.com/b/tomato-soup-sauce-close-up-94102997.jpg" },
        { link: " https://thefoodiephysician.com/wp-content/uploads/2013/07/Image-2.jpg"},
        { link: "https://th.bing.com/th/id/OIP.3MsHXdhbByfS3L4Nico6iAHaFj?pid=ImgDet&rs=1" },
    ]


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows:true,
    };

    return (
      
        <div style={{backgroundColor: "rgb(194, 121, 161)", height: "320px"}} >

<br/>

            <div class="button9 onClick={normal}">HEALTHY AND AWSOME RECEIPES</div>
            <br/>
            <br/>
            <br/>        

            <Slider arrows={true} {...settings}>
                {
                    arr2.map(data => {

                        return (<div>
                            <img className=" slider-image-team" src={data.link} alt="" />
                        </div>)
                    })
                }


            </Slider>
        </div>
    )
}