

function Category(){
    return (
        <div className="w-full md:w-1/3  ">
            <h3 className="font-bold text-xl">Category</h3>

            <ul className=" w-full flex flex-row md:flex-col gap-3 
            md:gap-5 font-light mt-8 md:mt-10 
             md:ml-8 ">
                <a href="" className="flex text-xs md:text-sm"><i className="fa-solid fa-box-open mr-2 text-sm "></i><li>All Product <i className="fa-solid fa-angle-down"></i></li></a>
                <a href="" className="text-xs md:text-sm"><i className="fa-solid fa-magnifying-glass mr-2"></i>New Arrival <i className="fa-solid fa-angle-down"></i></a>
                <a href="" className="text-xs md:text-sm"><i className="fa-regular fa-star mr-2"></i> Best Seller <i className="fa-solid fa-angle-down"></i></a>
                <a href="" className="text-xs md:text-sm"><i className="fa-solid fa-percent mr-2"></i>Discount <i className="fa-solid fa-angle-down"></i></a>
            </ul>
        </div> 
    )
}


export default Category;