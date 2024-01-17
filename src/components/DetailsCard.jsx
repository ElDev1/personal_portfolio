import styles from '../styles/detailsCard.module.css'

const DetailsCard = () => {
  return (
    <div className={styles.detailsCard}>
      <div className={styles.detailsCard__img}>
        <img src='../../public/images/freeflix.png' alt="" />
      </div>
      <div className={styles.detailsCard__info}>
        <h1 className={styles.detailsCard__title}>Netflix clon</h1>
        <div className={styles.detailsCard__description}>
          <h3>description</h3>
          <p>FullStack Netflix Clone using NextJS, Typescript, NextAuth and implements MongoDB & Prisma connect for database administration</p>
        </div>
        <div className={styles.detailsCard__stack}>
          <h3>Tech Stack</h3>
          <div className={styles.stack__container}>
            <div></div>
          </div>
        </div>
        <div className={styles.detailsCard__buttons}>
          <button>Github</button>
          <button>Live Demo</button>
        </div>
      </div>
    </div>
  )
}

export default DetailsCard
