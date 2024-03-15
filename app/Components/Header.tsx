import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex fixed z-2 bg-black w-screen justify-between items-center lg:px-20 px-5 py-5 top-0 ">
        <div>
          <a href="/">Home</a>
        </div>
        <nav>
          <ul className="flex justify-center items-center">
            <li className="mx-2 sm:mx-4">
              <a href="/#exercises">Exercises</a>
            </li>
            <li className="mx-2 sm:mx-4">Trainers</li>
            <li className="mx-2 sm:mx-4">
              <a href="/pricing">Pricing</a>
            </li>
          </ul>
        </nav>
      </header>

    </>
  );
};

export default Header;
