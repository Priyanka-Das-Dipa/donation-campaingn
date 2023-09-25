import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            404 Error!!
          </h5>
          <p className="block font-sans text-2xl font-light leading-relaxed text-inherit antialiased">
            PAGE NOT FOUND
          </p>
        </div>
        <div className="p-6 pt-0">
          <NavLink to="/">
          <button
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Go Back
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
