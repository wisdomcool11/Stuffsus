

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import productData from "../product.js"
// import product from "../product.js"
// import Card from "./product/Card"
import starOf from "/images/starOf.png"
import starOn from "/images/starOn.png"

export default function (){

    const [cardStar, setCardStar] = React.useState ( {
        id: 1,
        name: "Phone Holder Sakti",
        image: "/images/phone-holder.jpeg",
        rate: 5.0,
        amount: 29.90,
        star: false
    });

    function handleClick (){
        setCardStar(prevStar => ({
            ...prevStar,
            star: !prevStar.star
        }))
    }

    const slideElement = productData.map(product =>{
        return (
            // <Card key={product.id} {...product} />

            <div className=" w-full md:w-[280px] h-[400px]  relative" key={product.id} >
                <h5 className="absolute right-5 top-3 font-black w-[60px] 
                flex justify-center items-center text-sm bg-white rounded-2xl">
                    Other
                </h5>
                
                <div className="image-container w-[90%] flex justify-center items-center mx-auto p-12 bg-[#f1f1f1] rounded-2xl">
                    <img src={product.image} alt={product.name}  className=" w-full h-full bg-transparent  bg-cover bg-no-repeat bg-center"/>
                </div>
    
                <div className="p-2 md:p-5 flex flex-col justify-center gap-4">
                    <h3 className="text-lg font-bold">{product.name}</h3>
    
                    <div className="w-full flex justify-between items-center">
                        <span className="flex">
                            <button 
                                onClick={handleClick}
                                aria-pressed = {cardStar.star}
                                aria-label="Fill star icon"
                            >
                                <img 
                                    src= {cardStar.star ? starOn : starOf} 
                                    alt={cardStar.star ? "like star" : "unlike star" }
                                    className="w-[25px] h-[23px]"/>  
                            </button>

                            <span className="text-sm font-extralight ml-2">{(product.rate).toFixed(1)} (1.2k Reviews)</span>
                        </span>
                        <p className="font-bold text-lg">${(product.amount).toFixed(2)}</p>
                    </div>
    
                    <div className="w-fll flex justify-center items-center  [&_button]:w-full py-0 md:py-2 px-0 gap-2">
                        <button className="cart-btn add-to-cart hover:bg-[#222] hover:text-white 
                        hover:border-none active:translate-y-1 transition text-xs md:text-sm">
                            Add to Chart
                        </button>
    
                        <button className="cart-btn buy-now bg-[#222] text-white hover:bg-transparent
                            hover:border hover:text-black active:translate-y-1 transition text-xs md:text-sm">
                            Buy Now
                        </button>
                    </div>
    
                </div>
            </div>
        )
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,            // enable auto sliding
        autoplaySpeed: 2000,       // time between slides (in ms)
        pauseOnHover: true,        // pause autoplay when hovered
        pauseOnHover: true,        // ⛔ pause when hovered ✅ resume when mouse leaves
        arrows: true,              // show next/prev arrows (optional)
        pauseOnFocus: false,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            waitForAnimate: false
          }
        }
      ]
    };

  

    return(
        <section className="w-full p-4 md:p-13">
            <div className="w-full mx-auto p-13 md:p-25">
                <Slider {...settings}>
                    {slideElement}  
                </Slider>
            </div>
        </section>
    )
}

