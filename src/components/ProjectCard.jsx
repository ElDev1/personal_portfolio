import { Link } from 'react-router-dom'

import style from '../styles/projectCard.module.css'

const ProjectCard = () => {
  return (
    <article className={style.projectCard}>
      <img src="../public/programming-imgs2.webp" alt="" />
      <div className={style.projectCard__info}>
        <h1>Title</h1>
        <p>description...</p>
        <Link>View details</Link>
      </div>
    </article>
  )
}

export default ProjectCard
