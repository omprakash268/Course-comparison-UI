import { ITestimonialCardProp } from "../../../../utils/course.interface";
import { FaQuoteLeft } from "react-icons/fa";
import "./TestimonilaCard.css";

export const TestimonialCard = ({ testimonialInfo }: ITestimonialCardProp) => {
  return (
    <div className="testimonial-card w-[30rem] h-[20rem] flex flex-col items-center justify-start p-3 border border-gray-300 rounded-lg">
      <div className="font-medium text-lg my-2 h-8 flex items-center justify-center">
        {testimonialInfo.userName}
      </div>
      <div className="text-center my-2 h-[8rem] flex items-start justify-center w-full text-sm">
        {testimonialInfo.review}
      </div>
      <div className="w-full my-4 flex flex-col items-center justify-center">
        <p className="text-center text-sm">{testimonialInfo.course}</p>
        <FaQuoteLeft className="text-blue-200 text-2xl" />
      </div>
    </div>
  );
};
