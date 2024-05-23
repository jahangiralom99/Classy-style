import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Navbar2 from "./Shared/Navbar/Navbar2";
import Navbar3 from "./Shared/Navbar/Navbar3/Navbar3";
import Footer from "./Shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Navbar3 />
      <div>
        <Outlet />
      </div>
      <div >
        <Footer />
      </div>
    </div>
  );
};

export default Root;
