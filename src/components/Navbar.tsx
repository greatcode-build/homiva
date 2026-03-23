"use client";
import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <nav className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src="/icons/logo.png" alt="logo" height={40} width={40} />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-3 rounded-full">
          Sign up
        </button>
        <img
          src="/icons/menu.svg"
          className="md:hidden w-7 invert cursor-pointer"
          alt="menu icon"
          onClick={showModal}
        />
      </div>
      <div
        className={`inset-0 fixed md:hidden ${open ? "translate-x-0" : "translate-x-full"} transform transition-transform duration-300 bg-white`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src="/icons/x.svg"
            className="w-6"
            alt="cancel icon"
            onClick={closeModal}
          />
        </div>
        {navLinks.map(({ label, path }) => (
          <ul
            key={label}
            className="flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium"
          >
            <a
              href={path}
              className="px-4 py-2 rounded-full inline-block"
              onClick={closeModal}
            >
              {label}
            </a>
          </ul>
        ))}
      </div>
    </nav>
  );
};

export { Navbar };
