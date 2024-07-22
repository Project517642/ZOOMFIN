import React from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";

function SubNavBar() {
  return (
    <div className="bg-slate-100 h-auto py-5 w-full flex-none lg:flex flex-col lg:flex-row items-center justify-between px-3 lg:px-20 mt-14">
      <ul className="list-none text-gray-500 flex  flex-row flex-wrap justify-start gap-5 items-center ">
        <li>
          <a href="">Cards & Prepaid Services</a>
        </li>
        <li>
          <a href="#Loans">Loans</a>
        </li>
        <li>
          <a href="">Investment & Insurance</a>
        </li>
        <li>
          <a href="">Payments & Taxes</a>
        </li>
        <li>
          <a href="">Offers</a>
        </li>
        <li>
          <a href="">Service Request</a>
        </li>
      </ul>
      <div className="flex gap-2 pt-4 lg:pt-0">
        <button className="flex justify-between gap-4 p-2 items-center bg-purple-200 hover:bg-purple-300 hover:scale-95 duration-150 text-black font-semibold rounded-3xl">
          <TfiHeadphoneAlt />
          <a href="tel:07314999628">Help Center</a>
        </button>
        <button className="flex justify-between gap-4 p-2 items-center bg-purple-200 hover:bg-purple-300 hover:scale-95 duration-150 text-black font-semibold rounded-3xl">
          <FaLocationDot />
          <a href="#location">Locate Us</a>
        </button>
      </div>
    </div>
  );
}

export default SubNavBar;
