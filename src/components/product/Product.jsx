

import Card from "./Card";
import productItems from "../../product";
// import product from "../../product";

function Product (){
    const cardElement = productItems.map(product =>{
        return <Card key = {product.id} {...product} />
    } )


    return (
        <div className =" w-full p-8 md:p-0
        md:w-3/3 grid grid-col-1 grid-rows-1 md:grid-cols-3 md:grid-rows-3 justify-center  gap-10 md:gap-2 ">
            {cardElement}
        </div>
    )
}




export default Product;