import "./Home.css";
import webSearch from "../../assets/images/content_structure.svg";
import { IoSearch } from "react-icons/io5";
import { VerifiedReviews } from "./VerfiedReviews/VerifiedReviews";
import { PopularCourses } from "./PopularCourses/PopularCourses";
import { TrendingCourse } from "./TrendingCourse/TrendingCourse";
import { Testimonials } from "./Testimonials/Testimonials";

export const Home = () => {
  return (
    <div className="min-h-[40rem] w-full px-28  py-8">
      {/* Hero section */}
      <div className="w-full flex flex-wrap">
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
      <div className="w-full flex items-center justify-center mt-8">
        <VerifiedReviews />
      </div>

      {/* Popular courses */}
      <div className="w-full flex mt-8">
        <PopularCourses />
      </div>

      {/* Discover trending courses */}
      <div className="w-full flex mt-8">
        <TrendingCourse />
      </div>

      {/* Recently added courses */}
      <div className="w-full flex mt-8">
        <PopularCourses />
      </div>

      {/* Recently added courses */}
      <div className="w-full flex mt-8">
        <Testimonials />
      </div>
    </div>
  );
};
