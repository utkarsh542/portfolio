import React from "react";
import coinverse from "../assets/portfolio/coinverse.png";
import iNotebook from "../assets/portfolio/iNotebook.png";
import Textutils from "../assets/portfolio/Textutils.png";
import weather_app from "../assets/portfolio/weather-app.png";
import resturant_manu from "../assets/portfolio/resturant-manu.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: coinverse,
      demo:'https://glowing-chaja-3b6cd6.netlify.app/',
      code:'https://github.com/utkarsh542/cryptoverse'
    },
    {
      id: 2,
      src: iNotebook,
      demo:'https://venerable-blini-e40727.netlify.app/',
      code:'https://github.com/utkarsh542/iNotebook'
    },
    {
      id: 3,
      src: Textutils,
      demo:'https://friendly-croquembouche-579d55.netlify.app/',
      code:'https://github.com/utkarsh542/textUtiles-React'
    },
    {
      id: 3,
      src: weather_app,
      code:'https://github.com/utkarsh542/weather-app'
      
    },
    {
      id: 3,
      src: resturant_manu,
      code:'https://github.com/utkarsh542/resturant-manu'
      
    },
  
  ];

  return (<>
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-16">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_self">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={code} target="_self">Code</a>
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
