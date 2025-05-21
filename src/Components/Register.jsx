import React, { use, useState } from "react";
import Registeri from '../assets/signup.png';
import { Link, useNavigate } from "react-router";
import { AuthContext } from "./Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
   // console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
      return;
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
   // console.log({ name, photo, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            //console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode);
        // ..
      });
  };
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-4 mt-14">
        {/* Left Side (Image) */}
        <div className="w-full md:w-1/2 flex justify-center items-center">              
         <img
             src={Registeri}
             alt=""
             className="w-full h-auto object-cover rounded-lg shadow-lg"/>
        </div>
      {/* Right Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center px-4">

        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="w-full max-w-md">
          <fieldset className="space-y-4">
            {/* Name  */}
            <label className="mb-2 text-lg font-semibold block">Name</label>
            <input
              name="name"
              type="text"
              className="input input-bordered w-full"
              placeholder="Name"
              required
            />

            {nameError && <p className="text-xs text-error">{nameError}</p>}

            {/* Photo URl  */}
            <label className="mb-2 text-lg font-semibold block">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input input-bordered w-full"
              placeholder="Photo URl"
              required
            />

            {/* email  */}
            <label className="mb-2 text-lg font-semibold block">Email</label>
            <input
              name="email"
              type="email"
              className="input input-bordered w-full"
              placeholder="Email"
              required
            />

            {/* password  */}
            <label className="mb-2 text-lg font-semibold block">Password</label>
            <input
              name="password"
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral w-full">
             Register
            </button>
            <p className="font-semibold text-center pt-5">
              Allready Have An Account ?{" "}
              <Link className="text-secondary" to="/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;