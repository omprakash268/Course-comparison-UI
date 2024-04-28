import "./Home.css";
import webSearch from "../../assets/images/content_structure.svg";
import { IoSearch } from "react-icons/io5";

export const Home = () => {
  return (
    <div className="min-h-[40rem] bg-slate-100">
      {/* Hero section */}
      <div className="py-8 px-28 w-full flex flex-wrap">
        <div className="md:w-[50%] w-full p-4 flex flex-col justify-center items-start">
          <p className="font-bold text-3xl  my-2">
            Find courses that are best for your career
          </p>
          <p className=" my-2">
            Grow your skillset with the best online courses and certifications
            in management, technology, programming, and data science.
          </p>
          <div className="relative w-full">
            <input
              type="text"
              className="home-input-search p-[1rem] pr-[3rem] text-sm w-full outline-none border-none rounded-full my-2"
              placeholder="Search cources based on skills and careers"
            />
            <IoSearch className="absolute top-[1.5rem] right-[1.2rem] text-xl text-gray-500 cursor-pointer" />
          </div>
        </div>
        <div className="md:w-[50%] w-full p-4 flex justify-center items-center">
          <img src={webSearch} alt="" className="h-[20rem]" />
        </div>
      </div>

      {/* verified reviews */}
      <div className="py-8 px-28 w-full flex flex-col flex-wrap items-center">
        <p className="text-3xl font-medium mb-2">Compare courses with verified reviews</p>
        <p>Find courses from all the top providers including Coursera, Edx, Udacity, NPTEL, Udemy, Harvard, and Google to select what's best for you.</p>
      </div>
    </div>
  );
};
