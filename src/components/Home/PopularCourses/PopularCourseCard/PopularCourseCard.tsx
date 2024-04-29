import tech from "../../../../assets/images/tech.jpg";
import logo from "../../../../assets/images/logo.png";
import { FaStar } from "react-icons/fa";
import "./PopularCourseCard.css";

export const PopularCourseCard = () => {
  return (
    <div className="min-h-[17rem] w-[20rem] m-2 flex flex-col popular-course-card cursor-pointer relative">
      <div className="bg-yellow-500 absolute top-[8rem] right-0 px-3 font-semibold text-[0.7rem] text-white">
        FEATURED
      </div>
      <img src={tech} alt="" className="h-[10rem]" />
      <div className="flex flex-col p-2 w-full">
        <p className="font-medium">
          Professional graduate programme - Electrical Engineering
        </p>
        <div className="flex w-full text-sm items-center mt-2">
          <img src={logo} alt="" className="h-[2rem]" />
          <p>by IIMTS Domestic | </p>
          <div className="flex items-center">
            <FaStar className="text-yellow-600 mx-2" /> 5.0 (13.7k Views)
          </div>
        </div>
      </div>
    </div>
  );
};
