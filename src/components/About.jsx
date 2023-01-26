import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Hi there! Utkarsh Gupta, self-taught Frontend Developer. I have
          experience in React JS framework (Redux also), with keen interest in
          UI/UX. Aim to become Full Stack Developer. I have developed many
          personal projects during my learning journey, check them in project
          section.
        </p>
        <div className="pb-8 mt-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Details
          </p>
        </div>
<p className="text-xl mt-1">Utkarsh Gupta</p>
      <p className="text-xl mt-1">+91-8840143567</p>
      <p className="text-xl mt-1">gutkarsh191@gmail.com</p>
      </div>
    </div>
  );
};

export default About;
