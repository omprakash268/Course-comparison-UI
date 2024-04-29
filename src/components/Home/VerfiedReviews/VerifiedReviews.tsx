import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReviewCard } from "./ReviewCard/ReviewCard";
import { IReviewCardDetails } from "../../../utils/course.interface";
import "./VerifiedReviews.css";

export const VerifiedReviews = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const reviewCardData: IReviewCardDetails[] = [
    {
      id: 1,
      review: "this is my first review",
      courseName: "Technology Courses",
    },
    {
      id: 2,
      review: "this is my first review",
      courseName: "Data Science Courses",
    },
    {
      id: 3,
      review: "this is my first review",
      courseName: "Management Courses",
    },
    {
      id: 4,
      review: "this is my first review",
      courseName: "Degree Program Courses",
    },
    {
      id: 5,
      review: "this is my first review",
      courseName: "Finance Courses",
    },
    {
      id: 6,
      review: "this is my first review",
      courseName: "Creativity and Design Courses",
    },
    {
      id: 7,
      review: "this is my first review",
      courseName: "Emerging Technology Courses",
    },
    {
      id: 8,
      review: "this is my first review",
      courseName: "Healthcare Courses",
    },
  ];
  return (
    <>
      <div className="w-full">
        <div className="w-full flex flex-col flex-wrap items-center">
          <p className="text-3xl font-medium mb-2">
            Compare courses with verified reviews
          </p>
          <p>
            Find courses from all the top providers including Coursera, Edx,
            Udacity, NPTEL, Udemy, Harvard, and Google to select what's best for
            you.
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {reviewCardData.map((info: IReviewCardDetails) => {
              return <ReviewCard cardInfo={info} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};
