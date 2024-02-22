import styles from '../styles/detailsCard.module.css'

import { useParams, Link } from 'react-router-dom'

import TechItem from './TechItem'

const DetailsCard = ({ title, description, img, techStack, github, demo, repository }) => {
  const { projectType } = useParams()
  console.log(repository)
  return (
    <div className={styles.detailsCard}>
      <div className={styles.detailsCard__img}>
        <img src={img} alt="" />
      </div>
      <div className={styles.detailsCard__info}>
        <h1 className={styles.detailsCard__title}>{title}</h1>
        <div className={styles.detailsCard__description}>
          <h3>description</h3>
          <p>{description}</p>
        </div>
        <div className={''}>
          <h3>Tech Stack</h3>
          <div className={styles.stack__container}>
            <div className={styles.stack__items}>
              {techStack?.map(tech => <TechItem key={tech} tech={tech} />)}
            </div>
          </div>
        </div>
        {
          projectType === 'web' ? (
            <div className={styles.detailsCard__buttons}>
              <button onClick={() => window.open(github)}>Github</button>
              <button onClick={() => window.open(demo)}>Live Demo</button>
              <Link to='/projects/web'>{`Back to ${projectType} projects`}</Link>
            </div>
          ) : (
            <div className={styles.detailsCard__buttons}>
              <button onClick={() => window.open(repository)}>Repository</button>
              <Link to='/projects/data'>{`Back to ${projectType} projects`}</Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default DetailsCard
