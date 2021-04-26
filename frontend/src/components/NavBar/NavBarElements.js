// import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import "./NavBarElements.css";

const myStyled = (className, Component) => {
  return ({ children, ...props }) => ( <Component className={className} {...props}> { children } </Component> )
}
export const Nav = ({ children }) => (
  <nav className="navbar">
    { children}
  </nav>
)

export const NavLink = ({ children, ...props }) => (
  <Link className="navbar-link" {...props}>
    { children }
  </Link>
)

const div = ({ children, ...props}) => (<div {...props} >{children}</div>)
export const NavMenu = myStyled("nav-menu", div)
const nav = ({ children, ...props }) => (<nav {...props}>{children}</nav>)
export const NavBtn = myStyled("nav-button", nav)
export const NavBtnLink = myStyled("nav-button-link", Link)
