import { Outlet } from 'react-router'
import { Navbar } from '../components'

const NavLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default NavLayout
