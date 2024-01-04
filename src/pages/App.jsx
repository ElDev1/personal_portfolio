import Nav from '../components/Nav'

import styles from '../styles/app.module.css'

const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className={styles.app}>
      </main>
    </>
  )
}

export default App
