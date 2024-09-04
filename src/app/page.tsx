import HeroSection from './components/HeroSection';
import SkillWheel from './components/Skill';
import Project from './components/Project'
import ContactForm from './components/ContactForm';
import AboutSection from './components/AboutSection';
import Experience from './components/Experience';
import ThemeToggle from './components/ThemeToggle';
export default function Home() {
  return (
    <main>
      <div className="absolute top-0 right-0 p-4 z-50">
        <ThemeToggle />
      </div>
      <HeroSection />
      <AboutSection />
      <SkillWheel />
      <Experience />
      <Project />
      <ContactForm />
    </main>
  );
}
