import { CiHeart } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { TiArrowShuffle } from "react-icons/ti";

const Card = () => {
  return (
    <section className="grid md:grid-cols-2  lg:grid-cols-4 gap-4 mt-12">
      <div className="relative p-1 text-center group transform duration-500 cursor-pointer">
        <div className="absolute hidden group-hover:block top-8 right-4 rounded-md w-10 bg-white ">
          <div className="flex flex-col items-center justify-center gap-4 ">
            <div data-tip="Compare" className="tooltip tooltip-left">
            <TiArrowShuffle className="text-2xl" />
           </div>
            <div data-tip="Search" className="tooltip tooltip-left">
            <IoSearch className="text-2xl" />
            </div>
            <div data-tip="Add to Wishlist" className="tooltip tooltip-left">
            <CiHeart className="text-2xl" />
            </div>
          </div>
        </div>
        <img
          src="https://i.postimg.cc/YCYzjf8L/1716107102-404977792-IMG20240515193224-800x800.jpg"
          alt=""
        />

        <h1 className="text-xl my-5 font-semibold">
          All Over Multi Stone Work Gorgeous 4 Part Party
        </h1>
        <p>
          <span className="font-bold">SKU:</span> 173113-1
        </p>
        <h2 className="font-semibold ">
          {" "}
          <span className="text-2xl font-bold">&#2547;</span> 29.99
        </h2>
        <div className=" flex justify-center mt-2">
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
        </div>
        <div className="mt-8 flex md:flex-row gap-3 items-center justify-center">
          <div className="flex">
            <div className="text-2xl border px-3 py-1 border-l-2 rounded-l-full font-bold">
              -
            </div>
            <input
              className="border w-8 text-center"
              type="text"
              defaultValue={1}
            />
            <div className="text-2xl border px-3 py-1 border-l-2 rounded-r-full font-bold">
              +
            </div>
          </div>
          <div>
            <button className="px-6 py-2 bg-[#27aae1] transition ease-in duration-200 uppercase rounded-full  hover:text-white border-2  focus:outline-none">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="relative p-1 text-center group transform duration-500 cursor-pointer">
        <div className="absolute hidden group-hover:block top-8 right-4 rounded-md w-10 bg-white ">
          <div className="flex flex-col items-center justify-center gap-4 ">
            <div data-tip="Compare" className="tooltip tooltip-left">
            <TiArrowShuffle className="text-2xl" />
           </div>
            <div data-tip="Search" className="tooltip tooltip-left">
            <IoSearch className="text-2xl" />
            </div>
            <div data-tip="Add to Wishlist" className="tooltip tooltip-left">
            <CiHeart className="text-2xl" />
            </div>
          </div>
        </div>
        <img
          src="https://i.postimg.cc/YCYzjf8L/1716107102-404977792-IMG20240515193224-800x800.jpg"
          alt=""
        />

        <h1 className="text-xl my-5 font-semibold">
          All Over Multi Stone Work Gorgeous 4 Part Party
        </h1>
        <p>
          <span className="font-bold">SKU:</span> 173113-1
        </p>
        <h2 className="font-semibold ">
          {" "}
          <span className="text-2xl font-bold">&#2547;</span> 29.99
        </h2>
        <div className=" flex justify-center mt-2">
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
        </div>
        <div className="mt-8 flex md:flex-row gap-3 items-center justify-center">
          <div className="flex">
            <div className="text-2xl border px-3 py-1 border-l-2 rounded-l-full font-bold">
              -
            </div>
            <input
              className="border w-8 text-center"
              type="text"
              defaultValue={1}
            />
            <div className="text-2xl border px-3 py-1 border-l-2 rounded-r-full font-bold">
              +
            </div>
          </div>
          <div>
            <button className="px-6 py-2 bg-[#27aae1] transition ease-in duration-200 uppercase rounded-full  hover:text-white border-2  focus:outline-none">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="relative p-1 text-center group transform duration-500 cursor-pointer">
        <div className="absolute hidden group-hover:block top-8 right-4 rounded-md w-10 bg-white ">
          <div className="flex flex-col items-center justify-center gap-4 ">
            <div data-tip="Compare" className="tooltip tooltip-left">
            <TiArrowShuffle className="text-2xl" />
           </div>
            <div data-tip="Search" className="tooltip tooltip-left">
            <IoSearch className="text-2xl" />
            </div>
            <div data-tip="Add to Wishlist" className="tooltip tooltip-left">
            <CiHeart className="text-2xl" />
            </div>
          </div>
        </div>
        <img
          src="https://i.postimg.cc/YCYzjf8L/1716107102-404977792-IMG20240515193224-800x800.jpg"
          alt=""
        />

        <h1 className="text-xl my-5 font-semibold">
          All Over Multi Stone Work Gorgeous 4 Part Party
        </h1>
        <p>
          <span className="font-bold">SKU:</span> 173113-1
        </p>
        <h2 className="font-semibold ">
          {" "}
          <span className="text-2xl font-bold">&#2547;</span> 29.99
        </h2>
        <div className=" flex justify-center mt-2">
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
        </div>
        <div className="mt-8 flex md:flex-row gap-3 items-center justify-center">
          <div className="flex">
            <div className="text-2xl border px-3 py-1 border-l-2 rounded-l-full font-bold">
              -
            </div>
            <input
              className="border w-8 text-center"
              type="text"
              defaultValue={1}
            />
            <div className="text-2xl border px-3 py-1 border-l-2 rounded-r-full font-bold">
              +
            </div>
          </div>
          <div>
            <button className="px-6 py-2 bg-[#27aae1] transition ease-in duration-200 uppercase rounded-full  hover:text-white border-2  focus:outline-none">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="relative p-1 text-center group transform duration-500 cursor-pointer">
        <div className="absolute hidden group-hover:block top-8 right-4 rounded-md w-10 bg-white ">
          <div className="flex flex-col items-center justify-center gap-4 ">
            <div data-tip="Compare" className="tooltip tooltip-left">
            <TiArrowShuffle className="text-2xl" />
           </div>
            <div data-tip="Search" className="tooltip tooltip-left">
            <IoSearch className="text-2xl" />
            </div>
            <div data-tip="Add to Wishlist" className="tooltip tooltip-left">
            <CiHeart className="text-2xl" />
            </div>
          </div>
        </div>
        <img
          src="https://i.postimg.cc/YCYzjf8L/1716107102-404977792-IMG20240515193224-800x800.jpg"
          alt=""
        />

        <h1 className="text-xl my-5 font-semibold">
          All Over Multi Stone Work Gorgeous 4 Part Party
        </h1>
        <p>
          <span className="font-bold">SKU:</span> 173113-1
        </p>
        <h2 className="font-semibold ">
          {" "}
          <span className="text-2xl font-bold">&#2547;</span> 29.99
        </h2>
        <div className=" flex justify-center mt-2">
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
          <svg
            className="w-4 h-4 mx-px fill-current text-[#27aae1]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
          </svg>
        </div>
        <div className="mt-8 flex md:flex-row gap-3 items-center justify-center">
          <div className="flex">
            <div className="text-2xl border px-3 py-1 border-l-2 rounded-l-full font-bold">
              -
            </div>
            <input
              className="border w-8 text-center"
              type="text"
              defaultValue={1}
            />
            <div className="text-2xl border px-3 py-1 border-l-2 rounded-r-full font-bold">
              +
            </div>
          </div>
          <div>
            <button className="px-6 py-2 bg-[#27aae1] transition ease-in duration-200 uppercase rounded-full  hover:text-white border-2  focus:outline-none">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
