import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/login', label: 'Login' },
    { href: '/register', label: 'Register' }
  ];

  const isActive = (path: string) => router.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gradient-to-r from-primary-600/95 via-secondary-600/95 to-accent-600/95 backdrop-blur-xl shadow-2xl shadow-secondary-500/20 border-b border-white/10' 
        : 'bg-gradient-to-r from-primary-500/90 via-secondary-500/90 to-accent-500/90 backdrop-blur-md border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-white text-3xl font-bold bg-gradient-to-r from-white to-secondary-200 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 flex items-center space-x-2"
            >
              <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-md"></span>
              </span>
              <span>Ridho Bagus</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-3 text-sm font-semibold transition-all duration-300 group ${
                    isActive(item.href)
                      ? 'text-white bg-white/15 rounded-xl shadow-lg shadow-secondary-500/25'
                      : 'text-white/90 hover:text-white hover:bg-white/10 rounded-xl hover:shadow-lg hover:shadow-secondary-500/15'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:w-full ${
                    isActive(item.href) ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleDropdown}
              className="inline-flex items-center justify-center p-3 rounded-xl text-white hover:text-white hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Animated hamburger icon */}
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-white transform transition-all duration-300 ${
                  isDropdownOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}></span>
                <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-white transform transition-all duration-300 ${
                  isDropdownOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-white transform transition-all duration-300 ${
                  isDropdownOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden transition-all duration-300 ease-out ${
        isDropdownOpen 
          ? 'max-h-96 opacity-100 translate-y-0' 
          : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-4 pt-2 pb-4 space-y-2 bg-gradient-to-b from-primary-600/95 to-secondary-600/95 backdrop-blur-xl border-t border-white/10">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeDropdown}
              className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                isActive(item.href)
                  ? 'text-white bg-white/20 shadow-lg shadow-secondary-500/25'
                  : 'text-white/90 hover:text-white hover:bg-white/15 hover:shadow-lg hover:shadow-secondary-500/15'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
