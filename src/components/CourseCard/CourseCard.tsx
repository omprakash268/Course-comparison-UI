import logo from "../../assets/images/logo.png";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { CategoryChip } from "./CategoryChip/CategoryChip";
import { CourseStatusChip } from "./CourseStatusChip/CourseStatusChip";
import { FiPlusCircle } from "react-icons/fi";
import { ICardDataProps } from "../../utils/course.interface";

export const CourseCard = ({ cardData }: ICardDataProps) => {
  return (
    <div className="w-[40rem] min-h-[15rem] rounded-lg bg-slate-200 shadow-lg p-4 border-1 cursor-pointer m-2">
      <div className="min-h-[4rem] w-full flex justify-start items-center">
        {/* logo */}
        <div className="min-h-[4rem] w-[4rem] bg-white border-gray-400 border flex justify-center items-center">
          <img src={logo} alt="" />
        </div>

        {/* Course info */}
        <div className="min-h-[4rem] flex px-3 flex-col">
          <div className="text-sm ">
            {cardData.provider} | <span> {cardData.platformAvailable} </span>
          </div>
          <div className="text-lg font-medium">{cardData.courseName}</div>
          <div className="flex justify-start items-center">
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <FaStar className="text-yellow-600" />
            <FaRegStar />
            <FaRegStar />
            <span> &nbsp; (39) reviews</span>
          </div>
        </div>
      </div>

      {/* course category */}
      <div className="w-full flex flex-wrap">
        <div className="w-[70%] flex flex-col">
          <div className="flex mt-2 flex-wrap">
            {cardData.categories.map((cat: string) => {
              return <CategoryChip categroy={cat} />;
            })}
          </div>
          <div className="flex mt-2 flex-wrap">
            <CourseStatusChip type={cardData.type} />
          </div>
        </div>
        <div className="w-[30%] mt-2 flex flex-wrap flex-col justify-center items-center">
          <button className="w-[10rem] h-[2.2rem] rounded-3xl text-sm flex items-center justify-between px-4 border-gray-400 border hover:bg-blue-400">
            <FiPlusCircle /> <span> Add to compare</span>
          </button>
          <button className="w-[10rem] h-[2.2rem] mt-2 rounded-3xl text-sm flex items-center justify-center px-4 border-gray-400 border hover:bg-blue-400">
            <span> Enquire now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
