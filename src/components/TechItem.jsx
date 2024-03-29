import { projectIcon } from '../utils/ProjectIcons.jsx'
import styles from '../styles/techItem.module.css'

const TechItem = ({ tech }) => {
  return (
    <div className={styles.techItem}>
      {projectIcon(tech)}
      <p>{tech}</p>
    </div>
  )
}

export default TechItem
