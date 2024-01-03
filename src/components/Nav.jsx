import styles from '../styles/navbar.module.css'

import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

function Nav () {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__menu}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Web Projects</a>
        </li>
        <li>
          <a href="">Data Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <div className='navbar__buttons'>
        <a href="">
          <FaLinkedin />
        </a>
        <a href="">
          <IoMail />
        </a>
        <a href="">
          <FaGithub />
        </a>
      </div>
    </nav>
  )
}

export default Nav
