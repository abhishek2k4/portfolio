import React from "react";
import ProjectThumbnail from "../assets/image/project-thumbnail.png";
const Projects = () => {
    const portfolios = [
        {
            id:1,
            src:ProjectThumbnail
        },
        {
            id:2,
            src:ProjectThumbnail
        },
        {
            id:3,
            src:ProjectThumbnail
        },
        {
            id:4,
            src:ProjectThumbnail
        },
        {
            id:5,
            src:ProjectThumbnail
        },
        {
            id:6,
            src:ProjectThumbnail
        },
    ]
  return (
    <div name="project" className="py-20 w-full bg-gradient-to-b from-gray-950 via-gray-950 via-20% to-gray-700">
      {/* wrapper */}
      <div className="max-w-screen-lg mx-auto px-3 pt-8">
        <div className="pb-8">
          <h2 className="text-4xl font-semibold inline text-amber-50 border-b-4 border-amber-400">
            Projects
          </h2>
          <p className="text-gray-300 text-base mt-4 font-light ">
            Check out some of my right here
          </p>
        </div>

        {/* cards wrapper */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* card  */}
            {portfolios.map(({id,src}) => (
                <div key={id} className="border-2 border-amber-300 p-3 rounded-2xl">
                <img src={src} alt="" className="rounded-2xl" />
                {/* buttons */}
                <div className="flex justify-around items-center w-full gap-2 mt-2">
                  <button className="p-3 bg-amber-600 w-1/2 rounded-xl text-amber-50 font-semibold text-lg border-2 border-transparent hover:border-amber-600 hover:bg-transparent duration-200">
                    Demo ⓘ
                  </button>
                  <button className="p-3 bg-amber-600 w-1/2 rounded-xl text-amber-50 font-semibold text-lg border-2 border-transparent hover:border-amber-600 hover:bg-transparent duration-200">
                    Code ≥
                  </button>
                </div>
              </div>
            ))}
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
