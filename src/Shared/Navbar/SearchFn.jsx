
const SearchFn = () => {
    return (
        <div className="flex items-center">
            <input
              id="id-s03"
              type="search"
              name="id-s03"
              placeholder="Search here"
              aria-label="Search content"
              className="relative h-12 lg:w-[760px] md:w-[440px] w-96 rounded border border-[#ff6900] px-4 pr-12 text-sm text-slate-500 outline-none transition-all  invalid:border-pink-500 invalid:text-pink-500 focus:border-[#ff6900] focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed  disabled:text-slate-400"
            />
            <div className="bg-[#27aae1] cursor-pointer w-12 px-3 py-[14px] rounded-r-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-5 w-5 text-white  stroke-[#27aae1]peer-disabled:cursor-not-allowed"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                aria-label="Search icon"
                role="graphics-symbol"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
    );
};

export default SearchFn;