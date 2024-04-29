import choose from "../../../assets/images/home/choose.svg";
import compare from "../../../assets/images/home/file_searching.svg";
import certificate from "../../../assets/images/home/certificate_.svg";

export const TrendingCourse = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="text-2xl font-medium mb-2">Discover top trending courses</p>
      <p>
        See what skills other learners and professionals in your domain are
        working on. Search from 5000+ courses.
      </p>
      <div className="w-full flex items-center justify-center mt-4 ">
        <div className="h-[15rem] w-[15rem] flex flex-col items-center justify-center mx-6">
          <img src={choose} alt="" className="h-[10rem]" />
          <p className="text-center font-medium">
            Choose among free, online or masters courses
          </p>
        </div>
        <div className="h-[15rem] w-[15rem] flex flex-col items-center justify-center mx-6">
          <img src={compare} alt="" className="h-[10rem]" />
          <p className="text-center font-medium">
            Search & compare courses among top course providers
          </p>
        </div>
        <div className="h-[15rem] w-[15rem] flex flex-col items-center justify-center mx-6">
          <img src={certificate} alt="" className="h-[10rem]" />
          <p className="text-center font-medium">
            Get career ready with upskilling in high demand fields
          </p>
        </div>
      </div>
    </div>
  );
};
