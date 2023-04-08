import style from './Header.module.scss'
import { images } from '../../../constans'

const Header = ({ children }) => {
  return (
    <div className={style.header}>
      {/* <img src={images.logo} alt="logo" /> */}
      <h1>Soramtin</h1>
      {children}
    </div>
  )
}

export default Header
