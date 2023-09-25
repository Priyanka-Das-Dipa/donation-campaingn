import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";
import Banner from "../Banner/Banner";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center md:justify-between py-5 ">
        <Logo></Logo>
        <nav>
          <ul className="flex gap-5 text-xl font-bold">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donation"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-[#FF444A]" : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      
    </div>
  );
};

export default Navbar;
