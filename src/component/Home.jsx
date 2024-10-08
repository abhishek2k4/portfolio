import React, {useEffect} from "react";
import { FaArrowRight } from "react-icons/fa6";
import Profile from "../assets/image/profile-image.jpg";
import { Link } from "react-scroll";
import {gsap} from "gsap"

const Home = () => {
  useEffect(() => {
    gsap.to(".text-item", { 
        x:0,
        opacity:1,
        duration:.7,
        stagger:.1,
        ease: "power3.out",
    });
    gsap.to(".profile-image", {
      x:0,
      opacity:1,
      duration:.7,
      ease: "power3.out",
    });
  })
  return (
    <div name="home" className="flex flex-col overflow-x-hidden justify-center items-center h-screen  w-full md:px-12 bg-gradient-to-b from-gray-950 via-gray-950 via-10% to-gray-700 pt-11">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-center items-center">
        {/* title  */}
        <div className="w-full px-3 mb-8 ">
          <h1 className="text-item opacity-0 translate-x-[-200px] text-amber-50 text-[44px] leading-10 mb-8 ">
            Hi, I'm a <span className="text-amber-300 font-bold ">Frontend Developer</span>
          </h1>
          <p className="text-item opacity-0 translate-x-[-200px] text-amber-50 text-lg mb-4 md:w-full">
          I'm passionate about creating engaging web applications with React and Tailwind CSS, focusing on intuitive user interfaces for seamless digital experiences.
          </p>
          <Link to="about" smooth duration={500} className="text-item opacity-0 translate-x-[-200px] group text-black bg-amber-100 w-fit py-2 px-4 flex items-center rounded-2xl gap-2 hover:gap-4 duration-200">
            Know more
            <span>
              <FaArrowRight className="group-hover:rotate-90 duration-300 ease-in-out"/>
            </span>
          </Link>
        </div>

        {/* image  */}
        <div className="profile-image translate-x-[200px] opacity-0 w-2/4 aspect-square rounded-tl-[100px] rounded-tr-[230px] rounded-br-[100px] rounded-bl-[230px]  overflow-hidden hidden md:block">
          <img src={Profile} alt="Profile" className="w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
