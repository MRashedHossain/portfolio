import { sections } from './data/content'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import CompetitiveProgramming from './components/CompetitiveProgramming'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Leadership from './components/Leadership'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Map section id -> component. Rendering is driven by the `sections`
// registry in content.js, so toggling `enabled` there hides a section.
const REGISTRY = {
  home: Hero,
  about: About,
  education: Education,
  cp: CompetitiveProgramming,
  skills: Skills,
  projects: Projects,
  experience: Experience,
  leadership: Leadership,
  awards: Awards,
  contact: Contact,
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        {sections
          .filter((s) => s.enabled && REGISTRY[s.id])
          .map((s) => {
            const C = REGISTRY[s.id]
            return <C key={s.id} />
          })}
      </main>
      <Footer />
    </>
  )
}
