import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import "./Header.css";

export const Header = () => {
  const courses = {
    couresTechnology: [
      {
        id: 1,
        courseName: "Big Data",
      },
      {
        id: 2,
        courseName: "Cloud Technology",
      },
      {
        id: 3,
        courseName: "Computer Science",
      },
      {
        id: 4,
        courseName: "Cybersecurity",
      },
      {
        id: 5,
        courseName: "Database",
      },
      {
        id: 6,
        courseName: "IT Services",
      },
      {
        id: 7,
        courseName: "Master and Certificate Program",
      },
      {
        id: 8,
        courseName: "Networking and Hardware",
      },
      {
        id: 9,
        courseName: "Operating System",
      },
      {
        id: 10,
        courseName: "Programming",
      },
    ],
    courseDataScience: [
      {
        id: 1,
        courseName: "Big Data",
      },
      {
        id: 2,
        courseName: "Cloud Technology",
      },
      {
        id: 3,
        courseName: "Computer Science",
      },
      {
        id: 4,
        courseName: "Cybersecurity",
      },
      {
        id: 5,
        courseName: "Database",
      },
      {
        id: 6,
        courseName: "IT Services",
      },
    ],
    courseManagemaent: [
      {
        id: 1,
        courseName: "Big Data",
      },
      {
        id: 2,
        courseName: "Cloud Technology",
      },
      {
        id: 3,
        courseName: "Computer Science",
      },
      {
        id: 4,
        courseName: "Cybersecurity",
      },
      {
        id: 5,
        courseName: "Database",
      },
      {
        id: 6,
        courseName: "IT Services",
      },
      {
        id: 7,
        courseName: "Master and Certificate Program",
      },
      {
        id: 8,
        courseName: "Networking and Hardware",
      },
    ],
    courseDegreeProgram: [
      {
        id: 1,
        courseName: "Big Data",
      },
      {
        id: 2,
        courseName: "Cloud Technology",
      },
      {
        id: 3,
        courseName: "Computer Science",
      },
      {
        id: 4,
        courseName: "Cybersecurity",
      },
    ],
    courseMore: [
      {
        id: 1,
        courseName: "Big Data",
      },
      {
        id: 2,
        courseName: "Cloud Technology",
      },
      {
        id: 3,
        courseName: "Computer Science",
      },
      {
        id: 4,
        courseName: "Cybersecurity",
      },
      {
        id: 5,
        courseName: "Database",
      },
      {
        id: 6,
        courseName: "IT Services",
      },
      {
        id: 7,
        courseName: "Master and Certificate Program",
      },
      {
        id: 8,
        courseName: "Networking and Hardware",
      },
    ],
    blog: [
      {
        id: 1,
        courseName: "Big Data",
      },
      {
        id: 2,
        courseName: "Cloud Technology",
      },
      {
        id: 3,
        courseName: "Computer Science",
      },
    ],
  };
  return (
    <div className="min-h-[4rem] flex justify-between items-center p-1 box-border menu-navbar">
      <div className="flex justify-start items-center">
        <Link to={""}>
          <div className="logo w-full flex justify-start items-center ml-[6rem]">
            <img src={logo} alt="" className="h-[4rem] cursor-pointer" />
          </div>
        </Link>
        <div className="flex justify-start items-center px-2 h-full">
          <div className="flex justify-center items-center mx-2 hover:text-blue-600 cursor-pointer h-full text-center relative menu-technology">
            <span>Technology</span> <FaAngleDown className="mt-1 mx-2" />
            <div className="h-[25rem] w-[20rem] text-black rounded-lg absolute top-6 left-0 menu-list-contianer flex flex-col justify-start items-start">
              <div className="w-full flex pt-8 pb-2 px-6 font-medium">
                Courses in Technology
              </div>
              <ul className="w-full flex flex-col justify-start items-start">
                {courses.couresTechnology.map((course, index) => {
                  return (
                    <li
                      key={index}
                      className="w-full px-6 flex items-center h-[2rem] hover:bg-blue-100"
                    >
                      {course.courseName}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center mx-2 hover:text-blue-600 cursor-pointer h-full text-center relative menu-datascience">
            <span>Data Science</span> <FaAngleDown className="mt-1 mx-2" />
            <div className="h-[25rem] w-[20rem] text-black rounded-lg absolute top-6 left-0 menu-list-contianer flex flex-col justify-start items-start">
              <div className="w-full flex pt-8 pb-2 px-6 font-medium">
                Courses in Data Science
              </div>
              <ul className="w-full flex flex-col justify-start items-start">
                {courses.courseDataScience.map((course, index) => {
                  return (
                    <li
                      key={index}
                      className="w-full px-6 flex items-center h-[2rem] hover:bg-blue-100"
                    >
                      {course.courseName}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center mx-2 hover:text-blue-600 cursor-pointer h-full text-center relative menu-management">
            <span>Management</span> <FaAngleDown className="mt-1 mx-2" />
            <div className="h-[25rem] w-[20rem] text-black rounded-lg absolute top-6 left-0 menu-list-contianer flex flex-col justify-start items-start">
              <div className="w-full flex pt-8 pb-2 px-6 font-medium">
                Courses in Management
              </div>
              <ul className="w-full flex flex-col justify-start items-start">
                {courses.courseManagemaent.map((course, index) => {
                  return (
                    <li
                      key={index}
                      className="w-full px-6 flex items-center h-[2rem] hover:bg-blue-100"
                    >
                      {course.courseName}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center mx-2 hover:text-blue-600 cursor-pointer h-full text-center relative menu-degree">
            <span>Degree Program</span> <FaAngleDown className="mt-1 mx-2" />
            <div className="h-[25rem] w-[20rem] text-black rounded-lg absolute top-6 left-0 menu-list-contianer flex flex-col justify-start items-start">
              <div className="w-full flex pt-8 pb-2 px-6 font-medium">
                Courses in Degree Program
              </div>
              <ul className="w-full flex flex-col justify-start items-start">
                {courses.courseDegreeProgram.map((course, index) => {
                  return (
                    <li
                      key={index}
                      className="w-full px-6 flex items-center h-[2rem] hover:bg-blue-100"
                    >
                      {course.courseName}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center mx-2 hover:text-blue-600 cursor-pointer h-full text-center relative menu-more">
            <span>More</span> <FaAngleDown className="mt-1 mx-2" />
            <div className="h-[25rem] w-[20rem] text-black rounded-lg absolute top-6 left-0 menu-list-contianer flex flex-col justify-start items-start">
              <div className="w-full flex pt-8 pb-2 px-6 font-medium">
                More Courses
              </div>
              <ul className="w-full flex flex-col justify-start items-start">
                {courses.courseMore.map((course, index) => {
                  return (
                    <li
                      key={index}
                      className="w-full px-6 flex items-center h-[2rem] hover:bg-blue-100"
                    >
                      {course.courseName}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex justify-center items-center mx-2 hover:text-blue-600 cursor-pointer h-full text-center relative menu-bog">
            <span>Blog</span> <FaAngleDown className="mt-1 mx-2" />
            <div className="h-[25rem] w-[20rem] text-black rounded-lg absolute top-6 left-0 menu-list-contianer flex flex-col justify-start items-start">
              <div className="w-full flex pt-8 pb-2 px-6 font-medium">
                Blog Articals
              </div>
              <ul className="w-full flex flex-col justify-start items-start">
                {courses.blog.map((course, index) => {
                  return (
                    <li
                      key={index}
                      className="w-full px-6 flex items-center h-[2rem] hover:bg-blue-100"
                    >
                      {course.courseName}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses based on skills and care"
              className="h-[1.5rem] w-[18.5rem] p-4 pr-8 text-sm bg-gray-100 border-none outline-none"
            />
            <IoSearch className="absolute top-[0.5rem] right-[0.5rem] text-xl text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="flex text-center text-gray-700 font-medium hover:cursor-pointer hover:underline mr-2">
          Login
        </p>
        <p className="mr-2">or</p>
        <p className="flex text-center text-gray-700 font-medium hover:cursor-pointer hover:underline mr-2">
          Sign up
        </p>
      </div>
    </div>
  );
};
