import { HiMiniShoppingBag } from "react-icons/hi2";
import { useSelector } from "react-redux"

const Navbar = () => {
    const amount = useSelector((store) => store.cart.amount)
    return (
        <nav className=" bg-slate-700 md:px-[100px]">
            <div className=" container">
                <div className="flex items-center justify-between  p-4">
                    <p className="text-[#ffffff] md:text-[38px] text-[18px] font-semibold ">Redux toolkit</p>
                    <div className="relative">
                        <span className="text-[#ffffff] md:text-[38px] text-[18px]"><HiMiniShoppingBag /></span>
                        <div className="bg-slate-500  absolute  md:top-[-5px] top-[-7px] md:left-6  rounded-full md:w-[30px] w-[10px] h-[10px]  md:h-[30px] items-center px-1 text-[#ffffff]">
                            <p className="font-semibold item-center mt-[-2px] text-[20px] px-1 ">{amount}</p></div>
                    </div>

                </div>


            </div>


        </nav>
    )
}

export default Navbar
