import logo from "../../assets/images/logo.png";
export const Header = () => {
  return (
    <div className="min-h-[4rem] bg-slate-400 flex justify-between items-center p-1 box-border">
      <div className="logo w-[30%] flex justify-start items-center ml-[6rem]">
        <img src={logo} alt="" className="h-[4rem] cursor-pointer" />
      </div>
      <ul className="flex justify-start items-center px-2 w-[70%]">
        <li className="flex justify-center items-center p-2 hover:text-white cursor-pointer">
          Courses
        </li>
        <li className="flex justify-center items-center p-2 hover:text-white cursor-pointer">
          Proiders
        </li>
        <li className="flex justify-center items-center p-2 hover:text-white cursor-pointer">
          Explore
        </li>
        <li className="flex justify-center items-center p-2 hover:text-white cursor-pointer">
          Contact us
        </li>
        <li className="flex justify-center items-center p-2 hover:text-white cursor-pointer">
          About us
        </li>
      </ul>
    </div>
  );
};
