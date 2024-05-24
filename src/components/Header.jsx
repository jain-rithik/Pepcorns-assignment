// import React from "react";

const Header = () => {
  return (
    <div className="border-b">
      <div className="flex items-center justify-between px-6 lg:mx-44 md:mx-0 md:mr-2 p-4">
        <div className="flex items-center gap-12 ">
          <img
            src="https://assets.republic.com/assets/logo/full/black/logo-e66f75343959f4765e31fe42cdfb4fd3ba32de9773e941b31d12e992a6c3e842.svg"
            alt="Logo"
          />
          <p className="cursor-pointer hidden md:block">Investors</p>
          <p className="cursor-pointer hidden md:block">Businesses</p>
          <form
            className="hidden md:block"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className=" flex items-center rounded-full bg-gray-200/80 p-2">
              <i
                className="fa-solid fa-magnifying-glass lg:px-1.5"
                style={{ color: "#939393" }}
              ></i>
              <input
                type="text"
                placeholder="Search"
                className="md:hidden lg:block outline-none bg-gray-200/50"
              />
            </div>
          </form>
        </div>
        <div className="flex items-center gap-5 ">
          <i className="fa-solid fa-globe text-xl cursor-pointer hidden md:block"></i>
          <p className="cursor-pointer">Log in</p>
          <p className="cursor-pointer hidden md:block">Sign up</p>
          <i className="fa-solid fa-bars text-xl md:hidden cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
