import Card from "../../Shared/Card/Card";

const Trending = () => {
  return (
    <div className="mt-16">
      <div>
        <h1 className="text-3xl text-center font-bold text-[#f7941f]">
          Trending
        </h1>
        <p className="border mt-5"> </p>
        <hr
          className="bg-red-600 h-1 -mt-1 mx-auto
           w-64"
        />
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Trending;
