

import Category from "./Category"
import Product from "./Product"

export default function ProductMain (){
    return(
        <section className="flex flex-col md:flex-row justify-center gap-15 p-15 h-auto">
            <Category />
            <Product />
        </section>
    )
}

