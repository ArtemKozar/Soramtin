import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import style from './NavLayout.module.scss'

const NavLayout = () => {
  return (
    <div className={style.layout}>
      <Header>
        <Navbar />
      </Header>

      <Outlet />

      <Footer>
        <Navbar />
      </Footer>
    </div>
  )
}

export default NavLayout
