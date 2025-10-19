

import UpNav from "./UpNav";
import BottomNav from "./BottomNav";

function Header (){
    return (
        <header className=" w-full h-full flex flex-col justify-between relative ">
            <UpNav />
            <h1 className= " md:absolute md:left-[25%] md:bottom-20 md:translate-x-[50px] md:translate-y-[50px]  text-5xl md:text-[200px] text-white font-extrabold mx-auto tracking-widest">
                Shop
            </h1>
            <BottomNav />
        </header>
    )
}



export default Header;

