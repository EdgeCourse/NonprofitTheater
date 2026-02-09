import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Page } from '../../App';
import logo from 'figma:asset/3a8cd1be39b1b6a508a1e841dda37b5a746b9cf4.png';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', page: 'home' as Page },
    {
      label: 'About',
      dropdown: [
        { label: 'Who We Are', page: 'about' as Page },
        { label: 'History & Legacy', page: 'history' as Page },
        { label: 'Performance History', page: 'performance-history' as Page },
        { label: 'Photo Galleries', page: 'photo-galleries' as Page },
        { label: 'Awards', page: 'awards' as Page },
      ],
    },
    { label: 'Productions', page: 'productions' as Page },
    { label: 'Auditions', page: 'auditions' as Page },
    {
      label: 'Get Involved',
      dropdown: [
        { label: 'Volunteer', page: 'about' as Page },
        { label: 'Membership', page: 'about' as Page },
        { label: 'Scholarships', page: 'scholarships' as Page },
      ],
    },
    {
      label: 'Support Us',
      page: 'sponsors' as Page,
    },
    {
      label: 'Resources',
      dropdown: [
        { label: 'New to G&S?', page: 'new-to-gs' as Page },
        { label: 'Press Kit', page: 'press-kit' as Page },
        { label: 'Show Archive', page: 'archive' as Page },
        { label: 'McAdo Resources', page: 'mikado-resources' as Page },
      ],
    },
    { label: 'Outreach', page: 'outreach' as Page },
    { label: 'Merchandise', page: 'merchandise' as Page },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1E4D8B] shadow-lg' : 'bg-[#1E4D8B]/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <button
            onClick={() => {
              onNavigate('home');
              setIsMenuOpen(false);
            }}
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <img 
              src={logo} 
              className="h-12 w-auto transition-transform duration-200 group-hover:scale-105 rounded-lg" 
              alt="Gilbert & Sullivan Austin" 
            />
            <div className="hidden md:flex flex-col items-start">
              <span className="text-[#F8F3E6] font-bold text-lg leading-tight">Gilbert & Sullivan</span>
              <span className="text-[#C9A961] font-semibold text-base leading-tight">Austin</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="relative">
                    <button
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      className="text-[#F8F3E6] hover:text-[#C9A961] transition-colors flex items-center gap-1 py-2 text-sm whitespace-nowrap"
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                    {openDropdown === item.label && (
                      <div
                        className="absolute top-full left-0 mt-1 bg-[#1B365D] border border-[#C9A961]/20 rounded-lg shadow-xl min-w-[200px] py-2"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.dropdown.map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => {
                              onNavigate(subItem.page);
                              setOpenDropdown(null);
                            }}
                            className="w-full text-left px-4 py-2 text-[#F8F3E6] hover:bg-[#C9A961]/10 hover:text-[#C9A961] transition-colors text-sm"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => onNavigate(item.page!)}
                    className="text-[#F8F3E6] hover:text-[#C9A961] transition-colors text-sm whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>
            <button
              onClick={() => onNavigate('gala')}
              className="bg-[#8B5A8E] text-white px-4 py-2 rounded-lg hover:bg-[#6D4570] transition-all font-medium text-sm whitespace-nowrap"
            >
              50th Gala
            </button>
            <a
              href="https://www.zeffy.com/ticketing/9b1804e9-3125-45bc-a927-0b7faa841c31"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#9B8FC7] to-[#B8A8D9] text-white px-4 py-2 rounded-lg hover:from-[#8B7FB7] hover:to-[#A898C9] transition-all font-medium text-sm whitespace-nowrap"
            >
              Support Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#F8F3E6] hover:text-[#C9A961] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-[#C9A961]/20">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="py-2">
                  <div className="font-medium text-[#C9A961] mb-2">{item.label}</div>
                  {item.dropdown.map((subItem) => (
                    <button
                      key={subItem.label}
                      onClick={() => {
                        onNavigate(subItem.page);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left py-2 pl-4 text-[#F8F3E6] hover:text-[#C9A961] transition-colors"
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              ) : (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigate(item.page!);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-3 text-[#F8F3E6] hover:text-[#C9A961] transition-colors"
                >
                  {item.label}
                </button>
              )
            )}
            <button
              onClick={() => {
                onNavigate('gala');
                setIsMenuOpen(false);
              }}
              className="block w-full mt-4 bg-[#8B5A8E] text-white px-6 py-3 rounded-lg hover:bg-[#6D4570] transition-all text-center font-medium"
            >
              50th Anniversary Gala
            </button>
            <a
              href="https://www.zeffy.com/ticketing/9b1804e9-3125-45bc-a927-0b7faa841c31"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full mt-2 bg-gradient-to-r from-[#9B8FC7] to-[#B8A8D9] text-white px-6 py-3 rounded-lg hover:from-[#8B7FB7] hover:to-[#A898C9] transition-all text-center font-medium"
            >
              Support Us
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}