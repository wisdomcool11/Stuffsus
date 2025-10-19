

function BottomNav (){
    return (
        <div className="flex justify-between items-center bg-white p-2 md:p-3 rounded-t-lg z-[999] ">
            <h2 className="text-xs md:text-xl">
                Give All You Need
            </h2>

            <form className="w-full md:w-1/3 flex gap-1">
                <input type="text" placeholder="search on Stuffsus" className="border rounded-2xl w-2/3 pl-4 text-xs md:text-base"  />
                <button className="bg-[#222] rounded-2xl p-2 text-white w-1/3 text-xs md:text-base" >search</button>
            </form>
        </div>
    )
}


export default BottomNav;