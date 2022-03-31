import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg"

const NavBar = () => {
  return (
    <div className="primary-header flex">
      <div>
        <img src={logo} alt="space tourism" />
      </div>
      <nav>
        <ul className="primary-navigation underline-indicators flex">
            <NavLink to="/">
              <li className="uppercase letter-spacing-2 text-white ff-sans-cond fs-300 letter-spacing-2">
              <span>00</span>Home</li>
            </NavLink>
            <NavLink to="/destination">
              <li className="uppercase letter-spacing-2 text-white ff-sans-cond fs-300 letter-spacing-2">
              <span>01</span>Destinations</li>
            </NavLink>
            <NavLink to="/crew">
              <li className="uppercase letter-spacing-2 text-white ff-sans-cond fs-300 letter-spacing-2">
              <span>02</span>Crew</li>
            </NavLink>
            <NavLink to="/technology">
              <li className="uppercase letter-spacing-2 text-white ff-sans-cond fs-300 letter-spacing-2">
              <span>03</span>Technology</li>
            </NavLink>


        </ul>
      </nav>
    </div>
  )
}

export default NavBar

/*
<ul class="primary-navigation underline-indicators flex">
  <li class="active">
    <a class="uppercase letter-spacing-2 text-white ff-sans-cond fs-300 letter-spacing-2" href="#"
      ><span>00</span>Active
    </a>
  </li>
  <li>
    <a class="uppercase letter-spacing-2 text-white ff-sans-cond fs-300 letter-spacing-2" href="#"
      ><span>01</span>Hovered
    </a>
  </li>
  <li>
    <a class="uppercase letter-spacing-2 text-white ff-sans-cond fs-300 letter-spacing-2" href="#"
      ><span>02</span>Idle
    </a>
  </li>
</ul>
*/
