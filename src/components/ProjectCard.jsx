import { Link } from 'react-router-dom'

import style from '../styles/projectCard.module.css'

const ProjectCard = ({ projectType, id }) => {
  return (
    <article className={style.projectCard}>
      <img src="../public/programming-imgs2.webp" alt="" />
      <div className={style.projectCard__info}>
        <h1>Title</h1>
        <p>description...</p>
        <Link to={`/projects/${projectType}/${id}`}>View details</Link>
      </div>
    </article>
  )
}

export default ProjectCard
