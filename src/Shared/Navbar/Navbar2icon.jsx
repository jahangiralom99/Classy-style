import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { TbCurrencyTaka } from "react-icons/tb";
import { TiArrowShuffle } from "react-icons/ti";


const Navbar2icon = () => {
    return (
        <div className="flex items-center gap-3 ml-3">
            <div className="border rounded-full p-2">
              <CiHeart className="text-4xl" />
            </div>
            <div className="border rounded-full p-2">
              <TiArrowShuffle className="text-4xl" />
            </div>
            <div className="border py-3 px-4 rounded-full px=3 bg-[#27aae1] flex items-center gap-3">
              <CiShoppingCart className="text-2xl bg-white rounded-full" />
              <div className="flex items-center">
                <TbCurrencyTaka className="text-2xl text-white Font-bold" />
                <span className="font-bold text-xl text-white">0</span>
              </div>
            </div>
            <div className="border-4 border-[#27aae1]  rounded-full">
              <CiUser className="text-4xl p-1" />
            </div>
        </div>
    );
};

export default Navbar2icon;