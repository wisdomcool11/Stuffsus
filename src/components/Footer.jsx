

function Footer(){
    return (
        <footer>
            <TopFooter />
            <BottomFooter />
        </footer>
    )
}

function handleClick (e){
    e.preventDefault();
    e.reset();
}


function TopFooter (){
    return (
        <div className="bg-stone-900 p-10 w-[90%] mx-auto md:w-3/4 rounded-t-xl">
            <h2 className="text-2xl md:text-3xl text-white font-bold w-full md:w-58">
                Ready To Get Our New Stuff?
            </h2>

            <div className="flex flex-col md:flex-row justify-between mt-4 items-center gap-10 md:gap-0">
                <form onClick={handleClick} className="w-full text-white relative" >
                    <input type="text" name="email" placeholder="name@gmail.com"
                    className="bg-white text-stone-900 rounded-3xl px-5 py-3 w-full  md:w-[400px]" />
                    
                    <button className="md:absolute z-10 md:right-[75px] mt-3 md:top-[-7px]
                    active:translate-y-1 transition  py-2 rounded-3xl bg-white text-black md:text-white md:bg-stone-950 w-[120px] "
                    >
                        send
                    </button>
                </form>

                <div className="w-full text-white">
                    <h4 className="font-bold text-lg md:text-xl">Stuffus For Home and Needs</h4>
                    <p className="mt-4 text-xs md:text-sm leading-6 md:leading-8">
                        We'll listen to your needs, identify the best approach, 
                        and then create a beepoker smart <b>EV</b> charging solution
                        that is right for you.
                    </p>
                </div>
            </div>


        </div>
    )
}

function BottomFooter (){
    return (
        <div className="w-full  md:w-3/4 flex-col md:flex-row flex justify-between items-center p-10 mx-auto">
            <div className="w-full flex gap-14 h-full ">
                <div>
                    <h3 className="text-lg font-bold">About</h3>
                    <ul className="list-none text-sm md:text-base font-light text-stone-400 mt-4">
                        <a href="#"><li>Blog</li></a>
                        <a href="#"><li>Meet The Team</li></a>
                        <a href="#"><li>Contact Us</li></a>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold">Support</h3>
                    <ul className="list-none text-sm md:text-base font-light text-stone-400 mt-4">
                        <a href="#"><li>Contact Us</li></a>
                        <a href="#"><li>Shipping</li></a>
                        <a href="#"><li>Return</li></a>
                        <a href="#"><li>FAQ</li></a>
                    </ul>
                </div>
            </div>

            {/* sociai media div */}
            <div className="w-full flex flex-col md:justify-end md:items-end gap-2 md:h-[142px]">
                <h4>Social Media</h4>
                <div className="flex gap-4 text-xl md:[&_i]:text-3xl">
                    <a href=""><i classNames="fa-brands fa-square-x-twitter"></i></a>
                    <a href=""><i className="fa-brands fa-square-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                    <a href=""><i className="fa-brands fa-square-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;

