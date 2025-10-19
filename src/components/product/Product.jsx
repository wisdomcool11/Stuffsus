

import Card from "./Card";
import productItems from "../../product";
// import product from "../../product";

function Product (){
    const cardElement = productItems.map(product =>{
        return <Card key = {product.id} {...product} />
    } )


    return (
        <div className ="w-full md:w-3/3 grid grid-col-1 grid-rows-1 md:grid-cols-3 md:grid-rows-3 gap-4 md:gap-2 ">
            {cardElement}
        </div>
    )
}




export default Product;