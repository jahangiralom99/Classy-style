import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const NavSocialIcon = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-[#365493] rounded-full p-2">
        <FaFacebook className="text-3xl " />
      </div>
      <div className="bg-black rounded-full p-2">
        <FaTiktok className="text-white" />
      </div>
      <div className="bg-[#CB2027] rounded-full p-2">
        <FaYoutube className="text-white" />
      </div>
      <div className="bg-[#1EBEA5] rounded-full p-2">
        <FaWhatsapp className="text-white" />
      </div>
      <div className="bg-[#F89A1E] rounded-full p-2">
        <CgMail className="text-white" />
      </div>
    </div>
  );
};

export default NavSocialIcon;
