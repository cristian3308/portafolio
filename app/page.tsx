import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { CustomCursor, ScrollProgress, GridBackground } from '../components/Effects'

export default function Home() {
    return (
        <main className="relative">
            <CustomCursor />
            <ScrollProgress />
            <GridBackground />
            <Header />
            <Hero />
            <About />
            <Projects />
            <Blog />
            <Contact />
            <Footer />
        </main>
    )
}