import styles from '../styles/main.module.css'

const Main = () => {
  return (
    <section className={styles.main}>
      <div className="main__title">
        <h2 className={styles.first__text}>{"Hello I'M"}</h2>
        <h2 className={styles.second__text}>Devi Amaolo</h2>
        <h2 className={styles.third__text}>Web Developer</h2>
      </div>
      <div className={styles.fake__image}>
      </div>
    </section>
  )
}

export default Main
