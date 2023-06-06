import React from 'react';

const Header = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between bg-[url('/arc.jpg')] py-20">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          {/* <p className="text-2xl">Advanced security</p> */}
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Islamsk Opplæringssenter
          </h1>
          <p className="text-2xl py-4">
            Sunt culpa occaecat eiusmod mollit ad laboris ex. Qui anim voluptate
            do pariatur occaecat minim excepteur nisi et reprehenderit aute
            consequat exercitation id. Deserunt cupidatat aute commodo officia.
          </p>
          <button className="py-3 px-6 sm:w-[60%] my-4 text-white border bg-sky-500 border-sky-500 hover:bg-transparent hover:text-sky-500 rounded-md">
            Get Started
          </button>
        </div>
        {/* <div>
          <img className="w-full" src="/arc.jpg" alt="Image of an arc" />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
