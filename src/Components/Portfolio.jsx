import React from "react";
import proj2 from "../../public/image/proj2.png";
import proj3 from "../../public/image/proj3.png";
import proj1 from "../../public/image/proj1.png";
// import reactjs from "../../public/image/reactjs.png";

const Portfolio = () => {
  const cardItem = [
    {
      id: 1,
      logo: proj2,
      name: "TODO App",
    },
    {
      id: 2,
      logo: proj3,
      name: "TicTak Game",
    },

    {
      id: 3,
      logo: proj1,
      name: "Password-Generate",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
        <div>
          <h1 className="text-3xl font-bold mb-5"> PortFolio</h1>
          <span className="underline font-semibold">Featured Project</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
            {cardItem.map(({ id, logo, name }) => (
              <div
                className="border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <div className="flex justify-center">
                  <img
                    src={logo}
                    alt={name}
                    className="w-[120px] h-[120px] p-1 rounded-full border-2"
                  />
                </div>
                <div className="text-center mt-4">
                  <div className="font-bold text-xl mb-2">{name}</div>
                  <p className="text-gray-700">
                   IN this project I have used javascript for functionalty and html , css for better designing
                  </p>
                </div>
                <div className="flex justify-center mt-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                    View Project
                  </button>
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
