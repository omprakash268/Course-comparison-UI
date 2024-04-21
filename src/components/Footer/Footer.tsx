import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


export const Footer = () => {
  return (
    // <div className="bg-slate-400 min-h-[10rem] py-4 px-[6rem] flex justify-start flex-wrap">
    //   <div className="flex flex-col w-[20%]">
    //     <h3>Connect with us</h3>
    // <div className="flex h-[3rem] w-full mt-2">
    //   <div className="h-[1.5rem] w-[1.5rem] rounded-full border border-black flex justify-center items-center mr-2 cursor-pointer hover:text-blue-500">
    //     <FaFacebookF />
    //   </div>
    //   <div className="h-[1.5rem] w-[1.5rem] rounded-full border border-black flex justify-center items-center mr-2 cursor-pointer hover:text-orange-500">
    //     <AiFillInstagram />
    //   </div>
    //   <div className="h-[1.5rem] w-[1.5rem] rounded-full border border-black flex justify-center items-center mr-2 cursor-pointer hover:text-white">
    //     <MdEmail />
    //   </div>
    //   <div className="h-[1.5rem] w-[1.5rem] rounded-full border border-black flex justify-center items-center mr-2 cursor-pointer hover:text-red-500">
    //     <FaYoutube />
    //   </div>
    //   <div className="h-[1.5rem] w-[1.5rem] rounded-full border border-black flex justify-center items-center mr-2 cursor-pointer hover:text-blue-500">
    //     <FaTwitter />
    //   </div>
    // </div>
    //   </div>
    // </div>

    <section className="relative overflow-hidden py-10 bg-slate-400">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 flex flex-col">
                <div className="flex items-center">
                  <span className="text-lg font-bold">Contact Us</span>
                </div>
                <div className="flex h-[3rem] w-full mt-2">
                  <div className="h-[1.5rem] w-[1.5rem] rounded-full border border-black flex justify-center items-center mr-2 cursor-pointer hover:text-blue-800">
                    <FaFacebookF />
                  </div>
                  <div className="h-[1.5rem] w-[1.5rem] rounded-full border border-black flex justify-center items-center mr-2 cursor-pointer hover:text-orange-800">
                    <AiFillInstagram />
                  </div>
                  <div className="h-[1.5rem] w-[1.5rem] rounded-full border border-black flex justify-center items-center mr-2 cursor-pointer hover:text-white">
                    <MdEmail />
                  </div>
                  <div className="h-[1.5rem] w-[1.5rem] rounded-full border border-black flex justify-center items-center mr-2 cursor-pointer hover:text-red-800">
                    <FaYoutube />
                  </div>
                  <div className="h-[1.5rem] w-[1.5rem] rounded-full border border-black flex justify-center items-center mr-2 cursor-pointer hover:text-blue-500">
                    <FaTwitter />
                  </div>
                </div>
              </div>
              <div>
                <p className="mb-4  text-base font-medium">
                  The Tailwind CSS Component library
                </p>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2022. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Press Kit
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Account
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Help
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Licensing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
