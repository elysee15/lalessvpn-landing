import { useState } from "react";
import Logo from "../assets/Logo.svg";
import { XIcon, MenuIcon } from "@heroicons/react/solid";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const handleLinkClick = () => setOpen(false)

  return (
    <header className={`border-t-4 bg-white z-10 absolute w-full ${open && 'shadow-md'}`}>
      <nav className="container px-8 flex flex-wrap justify-between lg:items-center py-8">
        <div className="mb-0 lg:mb-6 xl:mb-0">
          <a href="/" className="">
            <img src={Logo} alt="logo" className="" />
          </a>
        </div>
        <div className="block ml-auto my-auto lg:hidden cursor-pointer">
          {open ? (
            <XIcon
              className="block h-6 w-6"
              aria-hidden="true"
              onClick={toggleMenu}
            />
          ) : (
            <MenuIcon
              className="block h-6 w-6"
              aria-hidden="true"
              onClick={toggleMenu}
            />
          )}
        </div>

        <ul
          className={`tracking-wide w-full block flex-grow text-right lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0 ${
            open ? "block" : "hidden"
          }`}
        >
          <li className="mb-2" onClick={handleLinkClick}>
            <a href="/#about" className=" lg:px-4 text-gray-800">
              About
            </a>
          </li>
          <li className="mb-2" onClick={handleLinkClick}>
            <a href="/#features" className="lg:px-4 text-gray-800">
              Features
            </a>
          </li>
          <li className="mb-2" onClick={handleLinkClick}>
            <a href="/#pricing" className="lg:px-4 text-gray-800">
              Pricing
            </a>
          </li>
          <li className="mb-2" onClick={handleLinkClick}>
            <a href="/#testimonials" className="lg:px-4 text-gray-800">
              Testimonial
            </a>
          </li>
          <li className="mb-2" onClick={handleLinkClick}>
            <a href="/#help" className="text-gray-800">
              Help
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
