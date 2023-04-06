import { NavLink } from 'react-router-dom'
import style from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? style.activeLink : 'link')}
        to="."
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.activeLink : 'link')}
        to="about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.activeLink : 'link')}
        to="mylist"
      >
        MyList
      </NavLink>
    </nav>
  )
}

export default Navbar
