import styles from '../styles/main.module.css'

import CoffeMachine from '../utils/animation/CoffeeMachine'

const Main = () => {
  return (
    <section id='main' className={styles.main}>
      <div>
        <p className={styles.first__text}>{"Hello I'M"}</p>
        <p className={styles.second__text}>Devi Amaolo</p>
        <p className={styles.third__text}>Web Developer</p>
        <div className={styles.main__buttons}>
          <button className={styles.cv__button}>My CV</button>
          <button className={styles.contact__button}>{"Let's talk"}</button>
        </div>
      </div>
      <div className={styles.img__container}>
        <CoffeMachine />
      </div>
    </section>
  )
}

export default Main
