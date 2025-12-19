import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl text-[#4CAF50] cursor-pointer" onClick={() => scrollToSection('hero')}>
            Localy
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['소개', '기능', '기술 스택', '팀', 'GitHub'].map((item, index) => {
              const ids = ['about', 'features', 'tech', 'team', 'github'];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(ids[index])}
                  className="text-[#333333] hover:text-[#4CAF50] transition-colors"
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#333333]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-white/95 rounded-lg p-4 shadow-lg">
            {['소개', '기능', '기술 스택', '팀', 'GitHub'].map((item, index) => {
              const ids = ['about', 'features', 'tech', 'team', 'github'];
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(ids[index])}
                  className="text-[#333333] hover:text-[#4CAF50] transition-colors text-left"
                >
                  {item}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
