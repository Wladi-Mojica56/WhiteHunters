import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Background from './components/Background'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Background variant="default" />
      <Navbar 
        variant="default"
        size="md"
        isSticky={true}
        onLogoClick={() => console.log('Logo clicked')}
        onLinkClick={(link) => console.log('Link clicked:', link)}
        onWhatsAppClick={() => console.log('WhatsApp clicked')}
      />
      <main className={styles.mainContent}>
        <Hero 
          variant="cyber"
          size="md"
          enableAnimations={true}
          enableIntersection={true}
          onButtonClick={(button) => console.log('Hero button clicked:', button)}
          onStatClick={(stat) => console.log('Hero stat clicked:', stat)}
          onScrollClick={() => console.log('Scroll clicked')}
        />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App