import Navbar3Category from "./Navbar3Category";

const Navbar3 = () => {
  return (
    <div className=" bg-[#f7941f] lg:flex items-center hidden  relative">
      <div className="max-w-screen-xl mx-auto px-3 ">
        <ul className="flex items-center gap-6">
          <Navbar3Category />
        </ul>
      </div>
      {/* {open && <div className="absolute top-28 right-2">h1 is the title</div>} */}
    </div>
  );
};

export default Navbar3;
