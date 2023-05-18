import React from "react";
import logo from "./../../assets/images/logo.png";

const HeaderComponent = () => {
  return (
    <>
      <header>
        <div className="nav_bar">
          <a href="http://localhost:3000/">
            <img className="logo" src={logo} alt="logo" />
          </a>

          <nav className="menu">
            <li>
              <a className="menu_btn" href="http://localhost:3000/">
                Home
              </a>
            </li>
            <li>
              <a className="menu_btn" href="http://localhost:3000/meals">
                Meals
              </a>
            </li>
            <li>
              <a className="menu_btn" href="http://localhost:3000/reviews">
                Reviews
              </a>
            </li>
            <li>
              <a className="menu_btn" href="http://localhost:3000/about">
                About
              </a>
            </li>
          </nav>
        </div>
        <h1>Weclome to my meal-sharing app!</h1>
      </header>
    </>
  );
};

export default HeaderComponent;
