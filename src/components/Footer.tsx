const Footer = () => {
  return (
    <footer
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <div className="flex items-center gap-2">
            <img
              src="/icons/logo.svg"
              alt="Homiva logo"
              height={40}
              width={40}
            />
            <span className="text-lg text-white font-bold">Homiva</span>
          </div>
          <p className="mt-4 text-gray-400">
            Built on trust and results. We connect you to real properties and
            guide you through every decision.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>
              <a href="#Header" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="max-w-sm mb-4 text-gray-400">
            Weekly updates on homes, prices, and smart property tips.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button className="py-2 px-4 bg-blue-500 text-white rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center mt-10 text-gray-500 py-4">
        <p>Copyright ©2026 Homiva. All rights reserved.</p>
      </div>
    </footer>
  );
};

export { Footer };
