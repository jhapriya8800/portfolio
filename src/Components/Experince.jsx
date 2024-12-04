import React from "react";
import html from "../../public/image/html.png";
import css from "../../public/image/css.jpg";
import javascript from "../../public/image/javascript.png";
import reactjs from '../../public/image/reactjs.jpg';
import nodejs from '../../public/image/nodejs.png';
import material from '../../public/image/material.png'
// import reactjs from "../../public/image/reactjs.png";

const Portfolio = () => {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },

    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: reactjs,
      name: "Reactjs",
    },
    {
      id: 5,
      logo: nodejs,
      name: "nodejs",
    },
    {
      id: 6,
      logo: material,
      name: "Material",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
          <h1 className="text-3xl font-bold mb-5">Familar Language are: </h1>
          <span>I have  finished my internship duration of 6 Months</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
            {cardItem.map(({ id, logo, name }) => (
              <div
                className=" p-4 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <div className="flex justify-center">
                  <img
                    src={logo}
                    alt={name}
                    className="w-[120px] h-[120px]  rounded-full"
                  />
                </div>
                <div className="text-center mt-4">
                  <div className="">{name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
