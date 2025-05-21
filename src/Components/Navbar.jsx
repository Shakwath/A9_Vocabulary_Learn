import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import loginicon from '../assets/loginicon.png';
import mainlogo from '../assets/mainlogo.png';
import userIcon from "../assets/user.webp";
import { AuthContext } from "../Components/Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(() => {
      alert("You Logged Out successfully");
    });
  };

  return (
    <div className="bg-base-100 shadow-sm">
      {/* Welcome message */}
      {user && (
        <div className="bg-blue-100 text-blue-800 text-sm sm:text-base text-center py-2">
          Welcome, <span className="font-semibold">{user.displayName || "User"}</span>! Happy learning 
        </div>
      )}

      <div className="navbar py-3 px-4 md:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="btn btn-ghost text-sm sm:text-base md:text-xl flex items-center gap-2"
          >
            <img
              src={mainlogo}
              alt="Lingo Bingo Logo"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
            />
            <span className="sm:inline">Learn Vocabulary</span>
          </Link>
        </div>

        {/* Center: Nav Links (visible on large screen only) */}
        <div className="hidden lg:flex justify-center">
          <ul className="menu menu-horizontal gap-4 px-1 text-sm md:text-base">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Startlearning">Start learning</NavLink></li>
            <li><NavLink to="/Tutorials">Tutorials</NavLink></li>
            <li><NavLink to="/AboutUs">About Us</NavLink></li>
            {user && <li><NavLink to="/myprofile">My Profile</NavLink></li>}
          </ul>
        </div>

        {/* Right: Login/Logout & Avatar */}
        <div className="flex items-center gap-3">
          <img
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            src={user?.photoURL || userIcon}
            alt="User"
          />
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-primary text-xs sm:text-sm px-4 py-1"
            >
              LogOut
            </button>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary flex items-center gap-1 text-xs sm:text-sm px-3 py-1"
            >
              <img
                src={loginicon}
                alt="login"
                className="w-3 h-3 sm:w-4 sm:h-4"
              />
              <span>Login</span>
            </Link>
          )}

          {/* Mobile Dropdown Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <button tabIndex={0} className="btn btn-ghost btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/Startlearning">Start learning</NavLink></li>
              <li><NavLink to="/Tutorials">Tutorials</NavLink></li>
              <li><NavLink to="/AboutUs">About Us</NavLink></li>
              {user && <li><NavLink to="/my-profile">My Profile</NavLink></li>}
              {!user && <li><NavLink to="/login">Login</NavLink></li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
