

function Category(){
    return (
        <div className="w-full md:w-1/3 ">
            <h3 className="font-bold text-xl">Category</h3>

            <ul className=" w-full flex flex-row md:flex-col gap-10 md:gap-5 font-light mt-8 md:mt-10 
             md:ml-8 [&_i]:text-xs ">
                <a href="" className="flex"><i className="fa-solid fa-box-open mr-2"></i><li>All Product <i class="fa-solid fa-angle-down"></i></li></a>
                <a href=""><i className="fa-solid fa-magnifying-glass mr-2"></i>New Arrival <i class="fa-solid fa-angle-down"></i></a>
                <a href=""><i className="fa-regular fa-star mr-2"></i> Best Seller <i class="fa-solid fa-angle-down"></i></a>
                <a href=""><i class="fa-solid fa-percent mr-2"></i>Discount <i class="fa-solid fa-angle-down"></i></a>
            </ul>
        </div> 
    )
}


export default Category;