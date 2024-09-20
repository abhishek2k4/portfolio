import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Animate header with 'about-header' class
    gsap.to(".about-header", {
      scrollTrigger: {
        trigger: ".about-header", // Trigger animation when header enters the viewport
        start: "top 80%", // Start animation when 80% of the viewport is reached
      },
      opacity: 1,
      x: 0, // Slide from left
      duration: 1,
      ease: "power3.out",
    });

    // Animate paragraphs with 'about-paragraph' class
    gsap.to(".about-paragraph", {
      scrollTrigger: {
        trigger: ".about-paragraph", // Trigger animation when the paragraph enters
        start: "top 80%", 
      },
      opacity: 1,
      x: 0, // Slide from left
      duration: 1,
      ease: "power3.out",
      stagger: 0.4, // Stagger each paragraph
    });
  }, []);

  return (
    <div
      name="about"
      className="py-40 w-full bg-gradient-to-b from-gray-700 via-gray-950 via-90% to-gray-950 flex justify-center items-center"
    >
      <div className="max-w-screen-lg px-3">
        <div className="about-header translate-x-[-100px] opacity-0 pb-8">
          <h2 className=" text-4xl font-semibold inline text-amber-50 border-b-4 border-amber-400">
            About
          </h2>
        </div>

        <p className="about-paragraph translate-x-[-100px] opacity-0 text-amber-50 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          inventore modi placeat accusamus! Laboriosam voluptatum tempore
          cupiditate fugit! Ipsum voluptatum provident ut blanditiis aperiam
          quaerat asperiores ipsa recusandae sapiente{" "}
          <span className="hidden md:block">
            repellat aut veritatis sunt debitis quae autem sequi, tempore
            cupiditate non saepe cumque laudantium consequuntur atque,
            voluptatem enim! Dolore, modi nemo
          </span>
          !
        </p>

        <br />

        <p className="about-paragraph translate-x-[-100px] opacity-0 text-amber-50 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          fugiat obcaecati necessitatibus id itaque laboriosam cupiditate modi
          aliquid suscipit{" "}
          <span className="hidden md:block">
            incidunt ipsa officiis voluptatum molestias fugit quisquam minus
            consequatur rerum, facere inventore repellendus. Voluptates
            mollitia placeat itaque repellat, doloremque dignissimos alias
          </span>
          ?
        </p>
      </div>
    </div>
  );
};

export default About;
