const PopularCategory = () => {
  return (
    <div className="mt-12">
      <h1 className="text-3xl text-center font-bold text-[#f7941f]">
        Our Popular Categories
      </h1>
      <p className="border mt-5"> </p>
      <hr
        className="bg-red-600 h-1 -mt-1 mx-auto
           w-64"
      />

      <div className="flex items-center justify-center gap-12 flex-wrap mt-12">
        <div className="flex items-center flex-col">
          <h1 className="text-2xl font-bold ">Woman Fashion</h1>
          <img
            src="https://i.ibb.co/dQMgtrx/fashion-blogger-130x130.png"
            alt=""
          />
        </div>
        <div className="flex items-center flex-col">
          <h1 className="text-2xl font-bold ">Man Fashion</h1>
          <img src="https://i.ibb.co/WF3KQkG/suit-130x130.png" alt="" />
        </div>
        <div className="flex items-center flex-col">
          <h1 className="text-2xl font-bold ">Kids</h1>
          <img src="https://i.ibb.co/bLV9BTF/child-130x130.png" alt="" />
        </div>
        <div className="flex items-center flex-col">
          <h1 className="text-2xl font-bold ">Jewellery</h1>
          <img src="https://i.ibb.co/z70C4f6/necklace-130x130.png" alt="" />
        </div>
        <div className="flex items-center flex-col">
          <h1 className="text-2xl font-bold ">Beauty</h1>
          <img src="https://i.ibb.co/Vg2rwbX/makeup-pouch-130x130.png" alt="" />
        </div>
        <div className="flex items-center flex-col">
          <h1 className="text-2xl font-bold ">Home Decor</h1>
          <img src="https://i.ibb.co/kXqx43V/window-130x130.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
