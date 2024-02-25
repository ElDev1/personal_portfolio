import { Link } from 'react-router-dom'
import styles from '../styles/main.module.css'

import CoffeMachine from '../utils/animation/CoffeeMachine'

const Main = () => {
  return (
    <section id='main' className={styles.main}>
      <div className={styles.main__text_container}>
        <p className={styles.first__text}>{"Hello I'm"}</p>
        <p className={styles.second__text}>Devi Amaolo</p>
        <p className={styles.third__text}>Web Dev and Data</p>
        <div className={styles.main__buttons}>
          <Link to='/#about' className={styles.cv__button}>My Profile</Link>
          <Link to='/#contact' className={styles.contact__button}>{"Let's talk"}</Link>
        </div>
      </div>
      <div className={styles.img__container}>
        <CoffeMachine />
      </div>
    </section>
  )
}

export default Main
