const Projects = () => {
  return (
    <div
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
        <button>
          <img
            src="/icons/chevron-left.svg"
            alt="chevron left icon"
            className="p-3 bg-gray-200 rounded mr-2"
            aria-label="Previous Project"
          />
        </button>
        <button>
          <img
            src="/icons/chevron-right.svg"
            alt="chevron left icon"
            className="p-3 bg-gray-200 rounded mr-2"
            aria-label="Next Project"
          />
        </button>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export { Projects };
