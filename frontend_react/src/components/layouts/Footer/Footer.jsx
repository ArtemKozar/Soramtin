import { NavLink } from 'react-router-dom'
// import { TiSocialInstagram } from 'react-icons/fa'
import { TiSocialInstagram, TiSocialTwitter } from 'react-icons/ti'

import style from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={style.footer}>
      <h1>Soramtin</h1>
      <div className={style.footer_nav}>
        <NavLink to=".">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="mylist">My List</NavLink>
      </div>
      <div className={style.footer_social}>
        <TiSocialInstagram className={style.footer_social_icon} />
        <TiSocialTwitter className={style.footer_social_icon} />
      </div>
    </div>
  )
}

export default Footer
