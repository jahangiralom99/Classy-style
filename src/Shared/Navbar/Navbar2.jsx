import { Link } from "react-router-dom";
import Navbar2icon from "./Navbar2icon";
import SearchFn from "./SearchFn";

const Navbar2 = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-3">
      <div className="flex md:flex-row flex-col justify-between gap-2 items-center">
        <Link to="/">
          <img
            className="w-28 border hidden md:block"
            src="https://i.ibb.co/KG68zms/Screenshot-2024-05-19-160207.png"
            alt=""
          />
        </Link>
        <div className="flex md:flex-row gap-3 flex-col-reverse justify-between items-center my-6">
          <SearchFn />
          <div className="">
            <Navbar2icon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
