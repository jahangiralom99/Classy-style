import { CiMenuBurger } from "react-icons/ci";
import { FcCallback } from "react-icons/fc";
import NavSocialIcon from "./NavSocialIcon";
import logo from "../../assets/icons8-gmail.svg";
import DrawerLink from "./DrawerLink/DrawerLink";

const Navbar = () => {
  return (
    <div className="bg-slate-100">
      <div className="drawer px-4 py-2">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex items-center justify-between gap-6">
          {/* Page content here */}
          <div className="flex items-center">
            <label htmlFor="my-drawer" className="btn ">
              <CiMenuBurger className="text-3xl font-bold " />
            </label>
            <h1 className="text-xl pl-6 font-bold">Follow Me</h1>
          </div>
          <div className="hidden md:block">
            <NavSocialIcon />
          </div>
          <div className="flex items-center gap-2 ">
            <div className="md:flex items-center gap-2 hidden">
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
            <div className="px-4 py-2 bg-[#2794E9EA] text-white hover:bg-[#ff6900] hover:text-black rounded-full ml-3">
              <button className="font-bold text-[12px] uppercase">
                Track Order
              </button>
            </div>
          </div>
        </div>
        <div className="drawer-side z-[9999999]">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-52 min-h-full text-black bg-base-200">
            {/* Sidebar content here */}
            <DrawerLink />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
