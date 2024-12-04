import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { ReactTyped } from "react-typed";
import img from "../../public/image/img2.png";

const Home = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              <ReactTyped
                className="text-blue-500 font-bold"
                strings={["Developer.", "Programmer.", "Designer.", "Coder."]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I have Completed 6 Months internship from Onlygenious situated in
              noida sector-16. Worked on{" "}
              <span className="text-blue-500 text-bold font-bold text-lg">
                {" "}
                PropertyJenniy
              </span>{" "}
              languages used{" "}
              <span className="text-blue-500 text-bold font-bold text-base">
                ReactJS
              </span>
              , <span className="text-blue-500 text-bold font-bold text-base">
              NextJs
              </span> as a framwork and for designing purpose used <span className="text-blue-500 text-bold font-bold text-base">
               MaterialUI,
              </span>
               <span className="text-blue-500 text-bold font-bold text-base">
               Bootstrap,
              </span> 
              <span className="text-blue-500 text-bold font-bold text-base">
              CSS
              </span> <span className="text-blue-500 text-bold font-bold text-base">
              TailwindCSS
              </span> , There I worked as Front end developer
            </p>
            <br />
            {/* social Media Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold">Available On</h1>
                <ul className="flex space-x-4">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <FaSquareInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2 ">
                <h1 className="font-bold">Currently Working On</h1>
                <div className="flex space-x-4">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 roundled-full border[2px]" />
                  <RiReactjsFill className="text-2xl md:text-3xl hover:scale-110 duration-200 roundled-full border[2px]" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 roundled-full border[2px]" />
                  <BsBootstrap className="text-2xl md:text-3xl hover:scale-110 duration-200 roundled-full border[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={img}
              alt="Description of the image"
              className="rounded-full md:w-[350px] md:h-[350px] w-[350px] h-[350px] items-center"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Home;
