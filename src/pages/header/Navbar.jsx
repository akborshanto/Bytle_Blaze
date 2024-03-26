import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme')|| 'light');
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="cotainer mx-auto">
      {/* navbar */}
      <div className="navbar bg-white text-black  font-semibold  shadow-lg fixed">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost font-bold text-secondary text-2xl">
            Byte <span className="text-primary"> Blaze</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold ">
            <li>
         <NavLink to='/' className={({isActive})=> isActive ?'text-primary font-bold font-2xl text-red-400':'font-bold'}>Home</NavLink>
            </li>
            <li>
<NavLink to='/blogs' className={({isActive})=>isActive ? "text-primary font-bold":'font-bold'}>BLOGS</NavLink>
            </li>
            <li>
           <NavLink to='/bookmarks' className={({isActive})=>isActive ? 'text-primary font-bold': 'font-bold'}>BOOK MARK</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <input
            onClick={handleTheme}
            type="checkbox"
            value={theme}
           checked={theme === 'synthwave'}
            className="toggle theme-controller"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
