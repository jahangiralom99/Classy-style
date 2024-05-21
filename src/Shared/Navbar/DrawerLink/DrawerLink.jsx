/* eslint-disable react/no-unescaped-entities */
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const DrawerLink = () => {
  const data = [
    {
      category: "WOMEN’S",
      women: [
        { name: "Borka", route: "/women/borka" },
        { name: "3 Piece", route: "/women/3-piece" },
        { name: "Saree Collection", route: "/women/saree-collection" },
        { name: "Women Bags", route: "/women/bags" },
        { name: "Hijab & Orna", route: "/women/hijab-orna" },
        { name: "Lehenga Collection", route: "/women/lehenga-collection" },
        { name: "Gharara", route: "/women/gharara" },
        { name: "Sharara", route: "/women/sharara" },
        { name: "Tops", route: "/women/tops" },
        { name: "Women’s Pants", route: "/women/pants" },
      ],
    },
    {
      category: "MEN’S",
      man: [
        { name: "Panjabi", route: "/men/panjabi" },
        { name: "Shirts", route: "/men/shirts" },
        { name: "T-Shirts", route: "/men/t-shirts" },
        { name: "Fatua", route: "/men/fatua" },
        { name: "Pajama", route: "/men/pajama" },
        {
          name: "Jeans & Gabardine Pants",
          route: "/men/jeans-gabardine-pants",
        },
        { name: "Men’s Hoodies", route: "/men/hoodies" },
      ],
    },
    {
      category: "KIDS’",
      kids: [
        { name: "Girls Frocks", route: "/kids/girls-frocks" },
        { name: "Girls Skirt", route: "/kids/girls-skirt" },
        { name: "Girls Tops", route: "/kids/girls-tops" },
        { name: "Panjabi Pajama Sets", route: "/kids/panjabi-pajama-sets" },
        { name: "Shirts", route: "/kids/shirts" },
        { name: "Shirt Pant Sets", route: "/kids/shirt-pant-sets" },
        { name: "T-Shirts & Polos", route: "/kids/t-shirts-polos" },
        { name: "T-Shirts Sets", route: "/kids/t-shirts-sets" },
      ],
    },
    {
      category: "BEAUTY",
      beauty: [
        { name: "Body Moisturizers", route: "/beauty/body-moisturizers" },
        { name: "Face Washes", route: "/beauty/face-washes" },
        { name: "Foundation", route: "/beauty/foundation" },
        { name: "Hair & Body Oils", route: "/beauty/hair-body-oils" },
        { name: "Shampoos", route: "/beauty/shampoos" },
      ],
    },
    {
      category: "JEWELLERY",
      jewellery: [
        { name: "Bracelets & Bangles", route: "/jewellery/bracelets-bangles" },
        { name: "Earrings", route: "/jewellery/earrings" },
        { name: "Necklace Sets", route: "/jewellery/necklace-sets" },
      ],
    },
    {
      category: "HOME DECOR",
      home_decor: [
        { name: "Bed Covers", route: "/home-decor/bed-covers" },
        { name: "Pillow Covers", route: "/home-decor/pillow-covers" },
      ],
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-start w-full">
        <li className="relative p-4 group z-[500]">
          <Link className="flex uppercase items-center font-bold gap-1">
            ALl Category <IoIosArrowDown />
          </Link>
          <ul className="absolute bg-white top-0 left-32 mt-2 text-black  opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg">
            <div className="flex p-6 gap-12 px-8">
              <li className="flex flex-col gap-2">
                <h1 className="font-bold">{data[0]?.category}</h1>
                {data[0]?.women.map((item, idx) => (
                  <Link key={idx}>{item.name}</Link>
                ))}
              </li>
              <li className="flex flex-col gap-2">
                <h1 className="font-bold">{data[1]?.category}</h1>
                {data[1]?.man?.map((item, idx) => (
                  <Link key={idx}>{item.name}</Link>
                ))}
              </li>
              <li className="space-y-2">
                <h1 className="font-bold">{data[2]?.category}</h1>
                {data[2]?.kids.map((item, idx) => (
                  <Link key={idx}>{item.name}</Link>
                ))}
              </li>
              <li className="flex flex-col gap-2">
                <h1 className="font-bold">{data[3]?.category}</h1>
                {data[3]?.beauty.map((item, idx) => (
                  <Link key={idx}>{item.name}</Link>
                ))}
              </li>
              <li className="flex flex-col gap-2">
                <h1 className="font-bold">{data[4]?.category}</h1>
                {data[4]?.jewellery.map((item, idx) => (
                  <Link key={idx}>{item.name}</Link>
                ))}
              </li>
              <li className="flex flex-col gap-2">
                <h1 className="font-bold">{data[5]?.category}</h1>
                {data[5]?.home_decor.map((item, idx) => (
                  <Link key={idx}>{item.name}</Link>
                ))}
              </li>
            </div>
          </ul>
        </li>
        <li className="relative p-4 group z-[500]">
          <Link className="flex uppercase items-center  font-bold gap-1">
            Women's <IoIosArrowDown />
          </Link>
          <ul className="absolute md:top-12 bg-white left-0 mt-2 text-black  opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg">
            <div className="flex p-6 gap-28 px-8">
              <li className="flex flex-col gap-2">
                <h1 className="font-bold">{data[0]?.category}</h1>
                {data[0]?.women.map((item, idx) => (
                  <Link key={idx}>{item.name}</Link>
                ))}
              </li>
            </div>
          </ul>
        </li>
        <li className="relative p-4 group z-[500]">
          <Link className="flex uppercase items-center  font-bold gap-1">
            Men's <IoIosArrowDown />
          </Link>
          <ul className="absolute md:top-12 bg-white left-0 mt-2 text-black  opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg">
            <div className="flex p-6 gap-28 px-8">
              <li className="flex flex-col gap-2">
                <h1 className="font-bold">{data[1]?.category}</h1>
                {data[1]?.man.map((item, idx) => (
                  <Link key={idx}>{item.name}</Link>
                ))}
              </li>
            </div>
          </ul>
        </li>
        <li className="relative p-4 group z-[500]">
          <Link className="flex uppercase items-center font-bold gap-1">
            Kids's <IoIosArrowDown />
          </Link>
          <ul className="absolute md:top-12 bg-white left-0 mt-2 text-black  opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg">
            <div className="flex p-6 gap-28 px-8">
              <li className="">
                <h1 className="font-bold">{data[2]?.category}</h1>
                <div>
                  {data[2]?.kids.map((item, idx) => (
                    <Link key={idx}>{item.name}</Link>
                  ))}
                </div>
              </li>
            </div>
          </ul>
        </li>
        <li className="relative p-4 group z-[500]">
          <Link className="flex uppercase items-center  font-bold gap-1">
            Beauty <IoIosArrowDown />
          </Link>
          <ul className="absolute md:top-12 bg-white left-0 mt-2 text-black  opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg">
            <div className="flex p-6 px-8">
              <li>
                <h1 className="font-bold">{data[3]?.category}</h1>
                <div className="flex flex-col gap-2">
                  {data[3]?.beauty.map((item, idx) => (
                    <Link key={idx}>{item.name}</Link>
                  ))}
                </div>
              </li>
            </div>
          </ul>
        </li>
        <li className="relative p-4 group z-[500]">
          <Link className="flex uppercase items-center font-bold gap-1">
            jewellery <IoIosArrowDown />
          </Link>
          <ul className="absolute md:top-12 bg-white left-0 mt-2 text-black  opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg">
            <div className="flex p-6 px-8">
              <li>
                <h1 className="font-bold">{data[4]?.category}</h1>
                <div className="flex flex-col gap-2">
                  {data[4]?.jewellery.map((item, idx) => (
                    <Link key={idx}>{item.name}</Link>
                  ))}
                </div>
              </li>
            </div>
          </ul>
        </li>
        <li className="relative p-4 group z-[500]">
          <Link className="flex uppercase items-center font-bold gap-1">
            home decor <IoIosArrowDown />
          </Link>
          <ul className="absolute md:top-12 bg-white left-0 mt-2 text-black  opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg">
            <div className="flex p-6 px-8">
              <li>
                <h1 className="font-bold">{data[5]?.category}</h1>
                <div className="flex flex-col gap-2">
                  {data[5]?.home_decor.map((item, idx) => (
                    <Link key={idx}>{item.name}</Link>
                  ))}
                </div>
              </li>
            </div>
          </ul>
        </li>
        <li>
          <Link className="flex uppercase items-center  font-bold gap-1">
            All Product <IoIosArrowDown />
          </Link>
        </li>
      </div>
    </div>
  );
};

export default DrawerLink;
