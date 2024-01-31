// import { projectIcon } from '../utils/ProjectIcons.jsx'
import { SiMongodb } from 'react-icons/si'

import styles from '../styles/techItem.module.css'

const TechItem = ({ tech }) => {
  return (
    <div className={styles.techItem}>
      <SiMongodb />
      <p>{tech}</p>
    </div>
  )
}

export default TechItem
