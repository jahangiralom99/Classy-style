import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <div className="grid md:grid-cols-3 mt-12 justify-items-center place-content-center">
      <div className="col-span-2">
        <Carousel showThumbs={false} autoPlay={true}>
          <div>
            <img src="https://i.ibb.co/TR2N0fV/20221111-185128.jpg" />
          </div>
          <div>
            <img src="https://i.ibb.co/TR2N0fV/20221111-185128.jpg" />
          </div>
          <div>
            <img src="https://i.ibb.co/TR2N0fV/20221111-185128.jpg" />
          </div>
        </Carousel>
      </div>
      <div className="col-span-12 md:col-span-1">
        <div>
          <img
            className="w-full"
            src="https://i.ibb.co/pyyhpS2/20221110-222920-0001.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full"
            src="https://i.ibb.co/pyyhpS2/20221110-222920-0001.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full"
            src="https://i.ibb.co/pyyhpS2/20221110-222920-0001.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
