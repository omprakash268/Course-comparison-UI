import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IPopularCourseDetails } from "../../../utils/course.interface";
import { PopularCourseCard } from "./PopularCourseCard/PopularCourseCard";

const PopularChip = ({
  popularInfo,
}: {
  popularInfo: IPopularCourseDetails;
}) => {
  return (
    <div
      key={popularInfo.id}
      className="h-[2.5rem] min-w-[2.5rem] p-2 m-2 flex justify-center items-center rounded-full border border-gray-400 cursor-pointer hover:border-blue-400"
    >
      {popularInfo?.courseType}
    </div>
  );
};

export const PopularCourses = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    variableWidth: true,
    slidesToShow: 5,
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

  const popularCourses: IPopularCourseDetails[] = [
    {
      id: 1,
      courseType: "All",
    },
    {
      id: 2,
      courseType: "Marketing",
    },
    {
      id: 3,
      courseType: "Business Analytics",
    },
    {
      id: 4,
      courseType: "Accounting",
    },
    {
      id: 5,
      courseType: "Business Tools",
    },
    {
      id: 6,
      courseType: "Software Tools",
    },
    {
      id: 7,
      courseType: "IT Services",
    },
    {
      id: 8,
      courseType: "Project Managesment",
    },
    {
      id: 9,
      courseType: "Programming",
    },
    {
      id: 10,
      courseType: "Banking",
    },
  ];
  return (
    <div className="w-full">
      <p className="text-2xl font-medium mb-4">Popular online courses</p>
      <div className="slider-container">
        <Slider {...settings}>
          {popularCourses.map((info: IPopularCourseDetails) => {
            return <PopularChip popularInfo={info} />;
          })}
        </Slider>
      </div>
      <div className="flex w-full flex-wrap">
        <PopularCourseCard />
        <PopularCourseCard />
        <PopularCourseCard />
      </div>
    </div>
  );
};
