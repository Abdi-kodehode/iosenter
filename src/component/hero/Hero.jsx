import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='bg-[url("./assets/mimbar.jpeg")] flex justify-center items-center h-screen md:h-128 lg:h-144 xl:h-160 w-full bg-cover bg-center p-20'>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-2 text-4xl font-bold text-center">
          Islamske Opplæringssenter
        </h1>
        <p className="text-lg text-center text-white">
          This is Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex flex-row items-center justify-center space-x-6 py-8">
          <Link to="/contact">
            <button className="px-6 py-2 text-center text-white bg-indigo-600 rounded-md shadow-md">
              Kontakt
            </button>
          </Link>
          <Link to="/sadaqah">
            <button className="px-6 py-2 text-center text-white bg-indigo-600 rounded-md shadow-md">
              Sadaqah
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;