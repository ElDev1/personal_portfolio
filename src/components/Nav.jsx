import styles from '../styles/navbar.module.css'

import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__menu}>
        <li>
          <Link to="/#main">Home</Link>
        </li>
        <li>
          <Link to="/#about">About</Link>
        </li>
        <li>
          <Link to="/#contact">Contact</Link>
        </li>
        <li>
          <Link to="/#projects">Projects</Link>
        </li>
      </ul>
      <div className={styles.navbar__buttons}>
        <Link to='https://www.linkedin.com/in/deviamaolo/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className={styles.linkedin__icon} size={'30px'} />
        </Link>
        <Link 
            to='#'
            onClick={(e) => {
                window.location.href = 'mailto:deviamaolo@gmail.com';
                e.preventDefault();
            }}>
          <IoMail className={styles.mail__icon} size={'35px'} />
        </Link>
        <Link to='https://github.com/ElDev1' target='_blank' rel='noopener noreferrer' className={styles.github__icon} href="">
          <FaGithub size={'30px'} />
        </Link>
      </div>
    </nav>
  )
}

export default Nav
