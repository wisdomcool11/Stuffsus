

export default function UpNav (){
    return (
        <div className="flex justify-between items-center bg-white p-2 md:p-3  rounded-b-lg">
            <h2 className="text-sm md:text-xl">
                <span className="text-lg md:text-2xl text-[cursive]">A</span>
                Stuffsus
            </h2>

            <nav className="w-full md:w-[1/3] ">
                <ul className="w-full flex justify-center items-center gap-1 md:gap-6 
                list-none [&_li]:font-bold ">
                   <a href="" className="nav_list"><li>Brands</li></a>
                    <a href="" className="nav_list"><li>Shop</li></a>
                    <a href="" className="nav_list"><li>Blog</li></a>
                </ul>
            </nav>

            <div className=" flex items-center gap-5 md:gap-6 [&_a]:hover:text-red-300 ">
                <a href=""><i className="fa-solid fa-magnifying-glass"></i></a>
                <a href=""><i className="fa-solid fa-cart-shopping"></i></a>
                <a href=""><i className="fa-solid fa-user"></i></a>
            </div>
        </div>
    )
}



