import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { SiMoneygram } from "react-icons/si";
import { MdMenu } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";


function NavBar() {
  return (
    <nav className="w-full flex  lg:flex-row justify-between items-center font-semibold px-3 lg:px-20 bg-blue-300 h-14 fixed z-50">
      {/* Zoom Finance ka Logo */}
      {/* <img src="" alt="" /> */}
      <div className="flex justify-start gap-1 items-center">
        <h1 className="text-blue-700 font-extrabold lg:text-lg text-sm">
          ZOOM FINANCE
        </h1>
        <SiMoneygram style={{ color: "white", fontSize: "20" }} />
      </div>
      {/* NavLinks for Routing Purpose */}
      <div className="hidden lg:flex lg:flex-row gap-4 text-white font-medium">
        <NavLink
          style={(e) => {
            return { color: e.isActive ? "black" : "" };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={(e) => {
            return { color: e.isActive ? "black" : "" };
          }}
          to="/aboutus"
        >
          About Us
        </NavLink>
        <NavLink
          style={(e) => {
            return { color: e.isActive ? "black" : "" };
          }}
          to="/contactus"
        >
          Contact Us
        </NavLink>
        <NavLink
          style={(e) => {
            return { color: e.isActive ? "black" : "" };
          }}
          to="/FormSubmission"
        >
          Form Submission
          
        </NavLink>
        <NavLink
          style={(e) => {
            return { color: e.isActive ? "black" : "" };
          }}
          to="/FD"
        >
          FD
          
        </NavLink>
        
      </div>
      {/* NavBar ke right Section */}
      <div className="flex flex-row justify-between items-center gap-5">
        <div className="hidden lg:flex flex-row items-center flex gap-4">
        <button className="flex justify-between gap-4 p-2 items-center bg-purple-200 hover:bg-purple-300 hover:scale-95 duration-150 text-black font-semibold rounded-3xl">
          <TfiHeadphoneAlt />
          <a href="tel:07314999628">Help Center</a>
        </button>
          <button className="flex justify-between gap-4 p-2 items-center bg-purple-200 hover:bg-purple-300 hover:scale-95 duration-150 text-black font-semibold rounded-3xl">
          <FaLocationDot />
          <a href="#location">Locate Us</a>
        </button>
        </div>
        {/* Enquiry Button */}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfpZ1SHcKzxeTBxt8yMNP1xQ2aFoM-3jOLXF9QC4CqjIPMHuQ/viewform?usp=sf_link" target="_parent">
        <div className="hidden lg:flex justify-between gap-2 items-center h-10 w-auto px-5 rounded-3xl bg-green-500 text-white font-semibold hover:bg-red-700 hover:scale-95 duration-150 ">
          <FaUserAlt style={{ color: "white", fontSize: "17" }} />
          <button>Enquiry</button>
        </div>
        <div className="block  lg:hidden">
          <MdMenu style={{ fontSize: "30" }} />
        </div>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
