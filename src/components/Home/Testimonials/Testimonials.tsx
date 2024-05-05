import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ITestimonialDetails } from "../../../utils/course.interface";
import { TestimonialCard } from "./TestimonialCard/TestimonialCard";

export const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 0.5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 0.3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const testimonialData: ITestimonialDetails[] = [
    {
      id: 1,
      review:
        "This course is really great to learn and start the career in Google cloud. Good lab assignments and nice examples to illustrate the topics.",
      userName: "Pankaj Kumar",
      course:
        "Google Cloud Platform Fundamentals: Core Infrastructure by Coursera",
    },
    {
      id: 2,
      review:
        "The course was great and the instructor taught on point with examples and links to resources for reference. The course helped get a grasp of the fundamentals of Data Analysis and the course exercises were sufficient.",
      userName: "Abhik Banerjee",
      course: "Analyzing Data with Python by edX",
    },
    {
      id: 3,
      review:
        "This course is really great to learn and start the career in Google cloud. Good lab assignments and nice examples to illustrate the topics.",
      userName: "Davinder Sahni",
      course:
        "Google Cloud Platform Fundamentals: Core Infrastructure by Coursera",
    },
    {
      id: 4,
      review:
        "I recently done a course offered from Harvard Business School regarding Senior Executive leadership program. The course was good and i have learned new things from that course.The lessons that i learned during these course was very helpful in acquiring great knowledge in this field. I also learned ...",
      userName: "Yogesh Ramdas Sabale",
      course:
        "Senior Executive Leadership Program - India by Harvard Business School",
    },
  ];
  return (
    <div className="w-full flex flex-col">
      <p className="text-2xl font-medium mb-4">What learners are saying</p>

      <div className="slider-containern">
        <Slider {...settings}>
          {testimonialData.map((info: ITestimonialDetails) => {
            return <TestimonialCard testimonialInfo={info} />;
          })}
        </Slider>
      </div>
    </div>
  );
};
