import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// ... (previous code)

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#000000] p-2">
      <div className="max-w-[1200px] py-[25px] flex justify-between items-center mx-auto">
        <div className="text-2xl text-white font-bold hover:text-sky-700 cursor-pointer">Digital Agency</div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}
        <ul className="hidden md:flex text-xl text-white gap-10">
          <li className="hover:bg-sky-800 hover:text-white px-4 py-2 rounded-full transition cursor-pointer">
            Home
          </li>
          <li className="hover:bg-sky-800 hover:text-white px-4 py-2 rounded-full transition cursor-pointer">
            About
          </li>
          <li className="hover:bg-sky-800 hover:text-white px-4 py-2 rounded-full transition cursor-pointer">
            Services
          </li>
          <li className="hover:bg-sky-800 hover:text-white px-4 py-2 rounded-full transition cursor-pointer">
            Contact
          </li>
          <li className="hover:bg-sky-800 hover:text-white px-4 py-2 rounded-full transition cursor-pointer">
            Blog
          </li>
        </ul>
        {/* Mobile Responsive */}
        <ul
          className={`duration-300 md:hidden w-full h-screen text-xl text-white fixed bg-black top-[88px] 
            ${toggle ? "left-0" : "left-[-100%]"}
          `}
        >
          <li className="p-5 hover:bg-gray-700 hover:text-white rounded transition cursor-pointer">
            Home
          </li>
          <li className="p-5 hover:bg-gray-700 hover:text-white rounded transition cursor-pointer">
            About
          </li>
          <li className="p-5 hover:bg-gray-700 hover:text-white rounded transition cursor-pointer">
            Services
          </li>
          <li className="p-5 hover:bg-gray-700 hover:text-white rounded transition cursor-pointer">
            Contact
          </li>
          <li className="p-5 hover:bg-gray-700 hover:text-white rounded transition cursor-pointer">
            Blog
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

