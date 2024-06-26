import { CiMenuBurger } from "react-icons/ci";
import { FcCallback } from "react-icons/fc";
import NavSocialIcon from "./NavSocialIcon";
import logo from "../../assets/icons8-gmail.svg";
import DrawerLink from "./DrawerLink/DrawerLink";

const Navbar = () => {
  return (
    <div className="bg-[#fbf8f2] border">
      <div className="drawer px-4 py-2">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex items-center justify-between gap-6">
          {/* Page content here */}
          <div className=" flex items-center gap-5">
            <div className="flex items-center">
              <label htmlFor="my-drawer" className="btn ">
                <CiMenuBurger className="text-3xl font-bold" />
              </label>
              <h1 className="text-[24px] pl-6 font-semibold">Follow Me</h1>
            </div>
            <div className="hidden md:block">
              <NavSocialIcon />
            </div>
          </div>
          <div className="flex items-center  gap-2 ">
            <div className="md:flex items-center  gap-2 hidden">
              <FcCallback className="text-3xl text-red-500" />
              <div>
                <p className="font-bold">24 Support</p>
                <p>01886108583</p>
              </div>
            </div>
            <div className="ml-3 gap-2 md:flex items-center hidden">
              <img className="w-10" src={logo} alt="" />
              <div>
                <p className="font-bold">e-Mail Support</p>
                <p>fake@gmail.com</p>
              </div>
            </div>
            <div className="px-4 py-2 bg-[#2794E9EA] text-white hover:bg-[#f7941f] hover:text-black rounded-full ml-3">
              <button className="font-bold text-[12px] uppercase">
                Track Order
              </button>
            </div>
          </div>
        </div>
        <div className="drawer-side z-[999] hover:drawer-overlay">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-60 min-h-full text-black bg-base-200">
            {/* Sidebar content here */}
            <DrawerLink />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
