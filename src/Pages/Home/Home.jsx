import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-8">
      <div className="grid md:grid-cols-3  justify-items-center place-content-center">
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
    </div>
  );
};

export default Home;
