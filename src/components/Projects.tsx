"use client";

import { useEffect, useState } from "react";
import { projectsList } from "../constants";
import { motion } from "motion/react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsList.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsList.length);
  };

  const previousProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsList.length - 1 : prevIndex - 1,
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full my-20 overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Modern family home in a quiet neighborhood. Three bedrooms, two
        bathrooms, open kitchen. Close to schools and shops.
      </p>
      <div className="flex justify-end items-center mb-8">
        <button onClick={previousProject}>
          <img
            src="/icons/chevron-left.svg"
            alt="chevron left icon"
            className="p-3 bg-gray-200 rounded mr-2"
            aria-label="Previous Project"
          />
        </button>
        <button onClick={nextProject}>
          <img
            src="/icons/chevron-right.svg"
            alt="chevron right icon"
            className="p-3 bg-gray-200 rounded mr-2"
            aria-label="Next Project"
          />
        </button>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectsList.map((project, index) => (
            <div key={index} className="relative w-full shrink-0 sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-100 object-cover mb-14"
              />
              <div className="absolute flex left-0 right-0 bottom-5 justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {project.price}
                    <span className="px-1">|</span>
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export { Projects };
