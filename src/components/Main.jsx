
import React from "react"
import Hero from "./Hero"
import ProductMain from "./product/ProductMain"
import Slide from "./Slide"
import Footer from "./Footer"


export default function Main (){

    // const [cardStar, setCardStar] = React.useState ( {
    //     id: 1,
    //     name: "Phone Holder Sakti",
    //     image: "/images/phone-holder.jpeg",
    //     rate: 5.0,
    //     amount: 29.90,
    //     star: false
    // });

    // function handleClicks (){
    //     setCardStar(prevStar => ({
    //         ...prevStar,
    //         star: !prevStar.star
    //     }))
    // }

    // console.log(cardStar);
    

    return (
        <>
            <Hero />
            <ProductMain />
            <Slide />
            <Footer />
        </>
    )
}

