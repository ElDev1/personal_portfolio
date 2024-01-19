import { Link } from 'react-router-dom'

import style from '../styles/projectCard.module.css'

const ProjectCard = ({ projectType, id, title, shortDescription, image }) => {
  return (
    <article className={style.projectCard}>
      <img src={image} alt={title} />
      <div className={style.projectCard__info}>
        <h1>{title}</h1>
        <p>{shortDescription}</p>
        <Link to={`/projects/${projectType}/${id}`}>View details</Link>
      </div>
    </article>
  )
}

export default ProjectCard
