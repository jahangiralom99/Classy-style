import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { TbCurrencyTaka } from "react-icons/tb";
import { TiArrowShuffle } from "react-icons/ti";

const Navbar2icon = () => {
  return (
    <div className="flex items-center gap-3 ml-3">
      <div className="border rounded-full p-2">
        <CiHeart className="text-2xl" />
      </div>
      <div className="border rounded-full p-2">
        <TiArrowShuffle className="text-2xl" />
      </div>
      <div className="border py-1 px-1 rounded-full bg-[#27aae1] flex items-center gap-3">
        <div className="bg-white rounded-full p-1">
        <CiShoppingCart className="text-2xl " />
        </div>
        <div className="flex items-center">
          <TbCurrencyTaka className="text-2xl text-white" />
          <span className="font-bold text-xl text-white">0</span>
        </div>
      </div>
      <div className="border-2 border-[#27aae1] p-2 rounded-full">
        <CiUser className="text-2xl p-1" />
      </div>
    </div>
  );
};

export default Navbar2icon;
