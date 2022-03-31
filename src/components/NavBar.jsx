import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="primary-header flex">
      <div></div>
      <nav>
        <ul className="primary-navigation underline-indicators flex">
          <Link to="/">
            <li className="active"><p className="uppercase letter-spacing-2 text-white ff-sans-cond fs-300 letter-spacing-2"><span>00</span>Home</p></li>
          </Link>
          <Link to="/destination">
            <li><p className="uppercase letter-spacing-2 text-white ff-sans-cond fs-300 letter-spacing-2"><span>01</span>Destination</p></li>
          </Link>
          <Link to="/crew">
            <li><p className="uppercase letter-spacing-2 text-white ff-sans-cond fs-300 letter-spacing-2"><span>02</span>Crew</p></li>
          </Link>
          <Link to="/technology">
            <li><p className="uppercase letter-spacing-2 text-white ff-sans-cond fs-300 letter-spacing-2"><span>03</span>Technology</p></li>
          </Link>
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
