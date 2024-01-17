import styles from '../styles/navbar.module.css'

import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="">About</Link>
        </li>
        <li>
          <Link to="">Contact</Link>
        </li>
        <li>
          <Link to="/#projects">Projects</Link>
        </li>
      </ul>
      <div className={styles.navbar__buttons}>
        <Link href="">
          <FaLinkedin className={styles.linkedin__icon} size={'30px'} />
        </Link>
        <Link href="">
          <IoMail className={styles.mail__icon} size={'35px'} />
        </Link>
        <Link className={styles.github__icon} href="">
          <FaGithub size={'30px'} />
        </Link>
      </div>
    </nav>
  )
}

export default Nav
