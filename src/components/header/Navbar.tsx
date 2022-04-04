import React, { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <nav className="max-w-[78rem] mx-auto fixed left-0 right-0 top-0 z-50  flex justify-between bg-white  h-20 items-center px-4 shadow-lg">
      {/* left section  */}
      <div className="flex space-x-16">
        {/* logo */}
        <a
          href="#home"
          className="text-2xl h-20 flex items-center font-poppins text-[#666] cursor-pointer relative uppercase"
        >
          <span className=" text-slate-800 font-bold ">Adonis </span> Store
        </a>
        {/* menu link  */}
        <ul
          className={`${
            click
              ? "block w-full z-50 p-8 min-h-screen absolute top-[5rem] -left-20 text-left bg-[#717fe0]  space-y-4 text-white"
              : "hidden"
          }  md:relative md:p-0  md:w-0 md:h-20  md:top-0 md:left-0  md:flex md:space-y-0   md:space-x-6 md:text-[#666] font-poppins md:items-center md:text-[.9rem]`}
        >
          <li
            className="hover:text-gray-700 md:hover:text-blue-700 list-none transition duration-300  delay-100 ease-out"
            onClick={() => setClick(false)}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className="hover:text-gray-700 md:hover:text-blue-700 transition duration-300  delay-100 ease-out"
            onClick={() => setClick(false)}
          >
            <a href="#shop">Shop</a>
          </li>
          <li
            className="hover:text-gray-700 md:hover:text-blue-700 transition duration-300  delay-100 ease-out"
            onClick={() => setClick(false)}
          >
            <a href="#features">Features</a>
          </li>
          <li
            className="hover:text-gray-700 md:hover:text-blue-700 transition duration-300  delay-100 ease-out"
            onClick={() => setClick(false)}
          >
            <a href="#footer">Blog</a>
          </li>
          <li
            className="hover:text-gray-700 md:hover:text-blue-700 transition duration-300  delay-100 ease-out"
            onClick={() => setClick(false)}
          >
            <a href="#footer">About</a>
          </li>
          <li
            className="hover:text-gray-700 md:hover:text-blue-700 transition duration-300  delay-100 ease-out"
            onClick={() => setClick(false)}
          >
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex space-x-8">
        {/* right section icons */}
        <div className="text-[#474747] cursor-pointer hover:text-blue-700 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="text-[#474747] cursor-pointer hover:text-blue-700 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <div className="text-[#474747] cursor-pointer hover:text-blue-700 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        <div
          className={`flex md:hidden text-[#474747] cursor-pointer hover:text-blue-700 `}
          onClick={() => setClick(!click)}
        >
          {!click ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
