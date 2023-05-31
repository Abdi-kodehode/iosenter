import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 text-black-300 font-semibold ">
      <div className='italic text-2xl'>
        <Link href="/">
          <h3>Islamsk Opplæringssenter</h3>   
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className='px-2'>
          <Link href="/">
            Hjem
          </Link>
        </li>
        <li className='px-2'>
          <Link href="/service">
            Tjenester
          </Link>
        </li>
        <li className='px-2'>
          <Link href="/about">
            Om Oss
          </Link>
        </li>
        <li className='px-2'>
          <Link href="/contact">
            Kontakt Oss
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#d5d6d8] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} href="/">
            Hjem
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} href="/service">
            Tjenester
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} href="/about">
            Om Oss
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} href="/contact">
            Kontakt Oss
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
