import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Home Sections
import Hero from './sections/Hero';
import About from './sections/About';
import ProjectsPreview from './sections/ProjectsPreview';
import CTA from './sections/CTA';

// Projects Page Sections
import ProjectsHero from './sections/ProjectsHero';
import ProjectsList from './sections/ProjectsList';

// Contact Page Sections
import ContactHero from './sections/ContactHero';
import ContactForm from './sections/ContactForm';

type Page = 'home' | 'about' | 'projects' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentSection, setCurrentSection] = useState('home');

  // Update current section based on scroll position for home page
  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const sections = ['home', 'about-preview', 'projects-preview', 'cta'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(sectionId === 'about-preview' ? 'about' : 
                            sectionId === 'projects-preview' ? 'projects' : 
                            sectionId === 'cta' ? 'contact' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleNavigate = (section: string) => {
    // Map section to page
    const pageMap: Record<string, Page> = {
      home: 'home',
      about: 'about',
      projects: 'projects',
      contact: 'contact',
    };

    const targetPage = pageMap[section] || 'home';
    setCurrentPage(targetPage);
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <About onNavigate={handleNavigate} />
            <ProjectsPreview onNavigate={handleNavigate} />
            <CTA onNavigate={handleNavigate} />
          </>
        );
      case 'about':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <About onNavigate={handleNavigate} />
            <CTA onNavigate={handleNavigate} />
          </>
        );
      case 'projects':
        return (
          <>
            <ProjectsHero />
            <ProjectsList />
          </>
        );
      case 'contact':
        return (
          <>
            <ContactHero />
            <ContactForm />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header currentSection={currentSection} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
