import React, { use }  from 'react';
import { Link, NavLink } from 'react-router-dom';
import loginicon from '../assets/loginicon.png'
import mainlogo from '../assets/mainlogo.png';
import userIcon from "../assets/loginicon.png";
import { AuthContext } from "../Components/Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("user trying to LogOut");
    logOut()
      .then(() => {
        alert("You Logged Out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100 px-4">
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
         <img src={mainlogo} alt="Lingo Bingo Logo" className="w-10 h-10 " />
         Learn Vocabulary</Link>
      </div>

      {/* Center: Nav Links - Hidden on small screens */}
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="menu menu-horizontal gap-4 px-1">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Startlearning">Start learning</NavLink></li>
          <li><NavLink to="/Tutorials">Tutorials</NavLink></li>
          <li><NavLink to="/AboutUs">About Us</NavLink></li>
        </ul>
      </div>

      {/* Right: Login + Hamburger */}
      {/* <div className="flex-none"> */}
        {/* Large screen: login button */}
        {/* <div className="hidden lg:flex">
          <NavLink to="/login" className="btn btn-outline btn-primary flex items-center gap-2">
            <img src={loginicon} alt="login" className="w-5 h-5" />
            Login
          </NavLink>

        </div> */}

          <div className="login-btn flex gap-5">
        <img
          className="w-12 rounded-full"
          src={`${user ? user.photoURL : userIcon}`}
          alt=""
        />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10 ">
            LogOut
          </button>
        ) : (
          <Link to="/login" className="btn btn-primary px-10 ">
             <img src={loginicon} alt="login" className="w-5 h-5" />
            Login
          </Link>
        )}
      </div>

        {/* Small screen: dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <button tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Startlearning">Start learning</NavLink></li>
            <li><NavLink to="/Tutorials">Tutorials</NavLink></li>
            <li><NavLink to="/AboutUs">About Us</NavLink></li>
            <li> <NavLink to="/login">Login</NavLink></li>
            
          </ul>
        </div>
      </div>
  );
};

export default Navbar;