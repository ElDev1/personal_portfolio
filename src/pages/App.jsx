import { useEffect } from 'react'

import Main from '../components/Main'
import Nav from '../components/Nav'
import About from '../components/About'

import styles from '../styles/app.module.css'

const App = () => {
  useEffect(() => {
    document.title = 'Devi Amaolo'
  }, [])

  return (
    <>
      <head>
        <title>{'Devi Amaolo'}</title>
      </head>
      <header>
        <Nav />
      </header>
      <main className={styles.app}>
        <Main />
        <About />
      </main>
    </>
  )
}

export default App
