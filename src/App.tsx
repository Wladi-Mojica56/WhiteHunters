import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.mainContent}>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
