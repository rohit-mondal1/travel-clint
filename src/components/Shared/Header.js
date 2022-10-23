import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 bg-orange-300 text-slate-900 shadow-lg">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          {/* <img src="../../img/logo.png" alt="" /> */}
          TRAVEL..
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/book">Booking</NavLink>
          </li>
          <li>
            <NavLink to="/contracts">Contract</NavLink>
          </li>

          <li>
            <NavLink to="/blog">Bolg</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">SignUp</NavLink>
          </li>
        </ul>
      </div>

      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <NavLink to="/news">News</NavLink>
          </li>

          <li>
            <NavLink to="/book">Booking</NavLink>
          </li>
          <li>
            <NavLink to="/contracts">Contract</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Bolg</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">SignUp</NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end mr-10 ">
        <div className="avatar indicator">
          <span className="indicator-item badge badge-secondary">typing…</span>
          <div className="w-10 h-10 rounded-full ">
            <img src="https://placeimg.com/160/160/people" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
