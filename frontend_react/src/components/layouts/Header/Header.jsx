import style from './Header.module.scss'
import { images } from '../../../constans'

const Header = ({ children }) => {
  return (
    <div className={style.header}>
      <h1>Soramtin</h1>
      {children}
    </div>
  )
}

export default Header
