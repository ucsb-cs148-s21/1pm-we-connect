import React from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavBarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">WeConnect</NavLink>
      <NavMenu>
        <NavLink to="/createPost">Create Post</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
