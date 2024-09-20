import { useState, useEffect } from 'react';
import React from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import gsap from 'gsap';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "project",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  useEffect(() => {
    gsap.to(".nav-link", {
      opacity: 1,
      y: 0, // Animates from above the original position
      stagger: 0.1, // Delays between each item
      duration: .2, // Animation duration for each link
      ease: "power3.out", // Easing effect for smooth animation
    });

    gsap.to(".logo",{
      opacity:1,
      y:0,
      duration:1,
      ease: "power3.out"
    });

    gsap.to(".bar-icon",{
      opacity:1,
      x:0,
      duration:.7,
    })
  }, []);

  return (
    <nav className='flex justify-between items-center px-6 md:px-12 py-4 bg-gradient-to-b from-gray-950 to-transparent fixed w-full max-w-screen-2xl z-50'>
      <div className='logo -translate-y-10 opacity-0 font-bold text-amber-50 text-3xl'>DevAbhi</div>
      <ul className='hidden md:flex gap-8 md:gap-[50px] text-gray-400'>
        {links.map(({ id, link }) => (
          <li key={id} className='nav-link opacity-0 -translate-y-10 list-none capitalize text-lg cursor-pointer font-semibold hover:text-amber-100 duration-200'>
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className='bar-icon translate-x-[50px] opacity-0 text-amber-50 md:hidden z-50'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <ul
        className={`z-20 text-amber-50 absolute top-0 left-0 h-screen w-screen bg-transparent backdrop-blur-lg flex justify-center items-center flex-col transition-transform duration-500 ease-in-out ${
          nav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {links.map(({ id, link }) => (
          <li key={id} className='text-3xl font-semibold my-4 cursor-pointer capitalize'>
            <Link to={link} onClick={() => setNav(!nav)} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
