import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={25}/>
        </>
      ),
      href: "https://www.linkedin.com/in/abhishek-dewangan-5a561b259/",
      style: "rounded-tr-lg",
    },
    {
      id: 2,
      child: (
        <>
          GitHub
          <FaGithub size={25}/>
        </>
      ),
      href: "https://github.com/abhishek2k4",
    },
    {
      id: 3,
      child: (
        <>
          Email
          <IoMail size={25}/>
        </>
      ),
      href: "mailto:aeditz69@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={25}/>
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-lg",
      download: true,
    },
  ];

  return (
    <div className="hidden  lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            // className={
            //   "bg-gray-500 py-2 px-3 ml-[-90px] hover:ml-0 duration-300" + " " + style
            // }
            className={"group flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-0 hover:rounded-r-md duration-300 ease-out bg-gray-500"+ " " + style}
            
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-amber-50 text-lg font-semibold"
              download={download}
              target="_blank"
              rel="noopener noreferrer"
            >
              {child}
            </a>
          </li>
        ))}

      </ul>
    </div>
  );
   
};

export default SocialLinks;
