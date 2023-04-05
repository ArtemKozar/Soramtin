import { Outlet } from 'react-router'
import { Navbar } from '..'
import Header from './Header/Header'

const NavLayout = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>

      <Outlet />
    </>
  )
}

export default NavLayout
