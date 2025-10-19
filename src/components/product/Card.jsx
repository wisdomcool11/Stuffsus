
import starOf from "/images/starOf.png"

export default function Card (props){
    return (
        <div className="w-full md:w-[280px] h-[400px]  relative">
            <a href="#">
                <h5 className="absolute right-5 top-3 font-black w-[60px] hover:bg-red-300 transition 
                flex justify-center items-center text-sm bg-white rounded-2xl">
                    Other
                </h5>

            </a>
            
            <div className="image-container w-[90%] flex justify-center items-center mx-auto p-12 bg-[#f1f1f1] rounded-2xl">
                <img src={props.image} alt={props.name}  className=" w-full h-full bg-transparent  bg-cover bg-no-repeat bg-center"/>
            </div>

            <div className="p-5 flex flex-col justify-center gap-1">
                <h3 className="text-lg font-bold">{props.name}</h3>

                <div className="w-full flex justify-between items-center">
                    <span className="flex">
                        <img src= {starOf} alt="like star" className="w-[25px] h-[23px]" />  
                        <span className="text-sm font-extralight ml-2">{(props.rate).toFixed(1)} (1.2k Reviews)</span>
                    </span>
                    <p className="font-bold text-lg">${(props.amount).toFixed(2)}</p>
                </div>

                <div className="w-fll flex justify-center items-center  [&_button]:w-full py-2 px-0 gap-2">
                    <button className="cart-btn add-to-cart hover:bg-[#222] hover:text-white 
                    hover:border-none active:translate-y-1 transition">
                        Add to Chart
                    </button>

                    <button className="cart-btn buy-now bg-[#222] text-white hover:bg-transparent
                     hover:border hover:text-black active:translate-y-1 transition">
                        Buy Now
                    </button>
                </div>

            </div>
        </div>
    )
}
 