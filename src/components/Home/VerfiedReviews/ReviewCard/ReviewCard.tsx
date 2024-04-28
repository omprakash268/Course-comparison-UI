import { IReviewCardProp } from "../../../../utils/course.interface";
import logo from "../../../../assets/images/logo.png";

export const ReviewCard = ({ cardInfo }: IReviewCardProp) => {
  return (
    <div className="h-[10rem] min-w-[5rem] border text-center border-gray-200 bg-white flex flex-col items-center justify-start cursor-pointer m-4 hover:shadow-lg rounded-lg p-2">
      <div className="h-[4rem]">
        <img src={logo} alt="" className="h-full" />
      </div>
      <span className="min-h-[2rem] font-medium">{cardInfo?.courseName}</span>
    </div>
  );
};
