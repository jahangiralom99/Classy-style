/* eslint-disable react/no-unescaped-entities */
import { BsThreeDots } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { TbCategoryMinus } from "react-icons/tb";

const Navbar4 = () => {
  // const data = [
  //     {
  //       category: "WOMEN’S",
  //       women: [
  //         { name: "Borka", route: "/women/borka" },
  //         { name: "3 Piece", route: "/women/3-piece" },
  //         { name: "Saree Collection", route: "/women/saree-collection" },
  //         { name: "Women Bags", route: "/women/bags" },
  //         { name: "Hijab & Orna", route: "/women/hijab-orna" },
  //         { name: "Lehenga Collection", route: "/women/lehenga-collection" },
  //         { name: "Gharara", route: "/women/gharara" },
  //         { name: "Sharara", route: "/women/sharara" },
  //         { name: "Tops", route: "/women/tops" },
  //         { name: "Women’s Pants", route: "/women/pants" },
  //       ],
  //     },
  //     {
  //       category: "MEN’S",
  //       man: [
  //         { name: "Panjabi", route: "/men/panjabi" },
  //         { name: "Shirts", route: "/men/shirts" },
  //         { name: "T-Shirts", route: "/men/t-shirts" },
  //         { name: "Fatua", route: "/men/fatua" },
  //         { name: "Pajama", route: "/men/pajama" },
  //         {
  //           name: "Jeans & Gabardine Pants",
  //           route: "/men/jeans-gabardine-pants",
  //         },
  //         { name: "Men’s Hoodies", route: "/men/hoodies" },
  //       ],
  //     },
  //     {
  //       category: "KIDS’",
  //       kids: [
  //         { name: "Girls Frocks", route: "/kids/girls-frocks" },
  //         { name: "Girls Skirt", route: "/kids/girls-skirt" },
  //         { name: "Girls Tops", route: "/kids/girls-tops" },
  //         { name: "Panjabi Pajama Sets", route: "/kids/panjabi-pajama-sets" },
  //         { name: "Shirts", route: "/kids/shirts" },
  //         { name: "Shirt Pant Sets", route: "/kids/shirt-pant-sets" },
  //         { name: "T-Shirts & Polos", route: "/kids/t-shirts-polos" },
  //         { name: "T-Shirts Sets", route: "/kids/t-shirts-sets" },
  //       ],
  //     },
  //     {
  //       category: "BEAUTY",
  //       beauty: [
  //         { name: "Body Moisturizers", route: "/beauty/body-moisturizers" },
  //         { name: "Face Washes", route: "/beauty/face-washes" },
  //         { name: "Foundation", route: "/beauty/foundation" },
  //         { name: "Hair & Body Oils", route: "/beauty/hair-body-oils" },
  //         { name: "Shampoos", route: "/beauty/shampoos" },
  //       ],
  //     },
  //     {
  //       category: "JEWELLERY",
  //       jewellery: [
  //         { name: "Bracelets & Bangles", route: "/jewellery/bracelets-bangles" },
  //         { name: "Earrings", route: "/jewellery/earrings" },
  //         { name: "Necklace Sets", route: "/jewellery/necklace-sets" },
  //       ],
  //     },
  //     {
  //       category: "HOME DECOR",
  //       home_decor: [
  //         { name: "Bed Covers", route: "/home-decor/bed-covers" },
  //         { name: "Pillow Covers", route: "/home-decor/pillow-covers" },
  //       ],
  //     },
  //   ];

  return (
    <div className="fixed hidden lg:top-0 md:block lg:left-0 z-[9999] h-screen group w-20 bg-white shadow-2xl rounded-md hover:w-64 transform duration-500 px-4 p-3 ">
      <div className="">
        <div className="flex flex-col  gap-8">
          <div className="p-2 border w-14 bg-[#2794E9EA] transform duration-500 group-hover:w-56 rounded-full">
            <div className="flex items-center">
              <div>
                <MdMenu className="text-4xl text-white " />
              </div>
              <div className="group-hover:ml-3 hidden group-hover:block font-bold text-white">
                Menu
              </div>
            </div>
          </div>
          <div className="flex  hover:text-[#2794E9EA] cursor-pointer">
            <div>
              <TbCategoryMinus className="text-2xl ml-2" />
            </div>
            <div className="group-hover:ml-3 text-sm hidden group-hover:block  font-bold">
              All Category
            </div>
          </div>
          <div className="flex hover:text-[#2794E9EA] cursor-pointer">
            <div>
              <img
                className="w-7 ml-2"
                src="https://i.ibb.co/SrT2LMb/woman.png"
                alt=""
              />
            </div>
            <div className="group-hover:ml-3 text-sm hidden group-hover:block  font-bold">
              Women"s
            </div>
          </div>
          <div className="flex hover:text-[#2794E9EA] cursor-pointer">
            <div>
              <img
                className="w-7 ml-2"
                src="https://i.ibb.co/0F8FsxK/man.png"
                alt=""
              />
            </div>
            <div className="group-hover:ml-3 text-sm hidden group-hover:block  font-bold">
              Men"s
            </div>
          </div>
          <div className="flex hover:text-[#2794E9EA] cursor-pointer">
            <div>
              <img
                className="w-6 ml-2"
                src="https://i.ibb.co/VVSYGqG/child-150x150.png"
                alt=""
              />
            </div>
            <div className="group-hover:ml-3 text-sm hidden group-hover:block  font-bold">
              Kid"s
            </div>
          </div>
          <div className="flex hover:text-[#2794E9EA] cursor-pointer">
            <div>
              <img
                className="w-6 ml-2"
                src="https://i.ibb.co/LY584xC/makeup-pouch-150x150.png"
                alt=""
              />
            </div>
            <div className="group-hover:ml-3 text-sm hidden group-hover:block  font-bold">
              Beauty
            </div>
          </div>
          <div className="flex hover:text-[#2794E9EA] cursor-pointer">
            <div>
              <img
                className="w-6 ml-2"
                src="https://i.ibb.co/zx3rMwV/necklace-150x150.png"
                alt=""
              />
            </div>
            <div className="group-hover:ml-3 text-sm hidden group-hover:block  font-bold">
              Jewellery
            </div>
          </div>
          <div className="flex hover:text-[#2794E9EA] cursor-pointer">
            <div>
              <img
                className="w-6 ml-2"
                src="https://i.ibb.co/9V95XYQ/window-150x150.png"
                alt=""
              />
            </div>
            <div className="group-hover:ml-3 text-sm hidden group-hover:block  font-bold">
              Home Doecor
            </div>
          </div>
          <div className="flex hover:text-[#2794E9EA] cursor-pointer">
            <div>
              <img
                className="w-6 ml-2"
                src="https://i.ibb.co/cXPH927/accessories.png"
                alt=""
              />
            </div>
            <div className="group-hover:ml-3 text-sm hidden group-hover:block  font-bold">
              Others
            </div>
          </div>
          <div className="flex hover:text-[#2794E9EA] cursor-pointer">
            <div>
              <BsThreeDots className="text-2xl ml-2" />
            </div>
            <div className="group-hover:ml-3 hidden group-hover:block  font-bold">
              <div className="group-hover:ml-3 text-sm hidden group-hover:block  font-bold">
                All Category
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar4;
