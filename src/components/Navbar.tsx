const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src="/icons/logo.png" alt="logo" height={40} width={40} />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-3 rounded-full">
          Sign up
        </button>
        <img
          src="/icons/menu.svg"
          className="md:hidden w-7 invert"
          alt="menu icon"
        />
      </div>
      <div>
        <ul>
          <a href="#Header" className="px-4 py-2 rounded-full inline-block">
            Home
          </a>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
