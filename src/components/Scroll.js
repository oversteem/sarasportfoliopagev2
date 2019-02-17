import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavScroll } from '../basic/styles';

const Scroll = (props) => (
  <NavScroll>
    <Link
      activeClass="active"
      to="skills,"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
    </Link>
  </NavScroll>
  //<Navigation />

);

export default Scroll;