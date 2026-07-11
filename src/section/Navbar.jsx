import { useState, useEffect, useRef } from 'react';
import { navLinks } from '../constant/index.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

const NavItems = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleClick = (e, href) => {
    e.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 100;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    if (onNavigate) onNavigate();
  };

  return (
    <ul className='nav-ul'>
      {navLinks.map((item) => (
        <li key={item.id} className='nav-li'>
          <a
            href={item.href}
            className='nav-li_a'
            onClick={(e) => handleClick(e, item.href)}
          >
            {t(`nav.${item.key}`)}
          </a>
        </li>
      ))}
    </ul>
  );
};

const LanguageToggle = ({ className = '' }) => {
  const { t, toggleLanguage } = useLanguage();
  return (
    <button
      type='button'
      onClick={toggleLanguage}
      aria-label={t('language.ariaLabel')}
      className={`text-sky-950 border border-sky-950 hover:bg-sky-950 hover:text-white transition-colors font-generalsans font-medium rounded-full px-3 py-1 text-sm ${className}`}
    >
      {t('language.toggle')}
    </button>
  );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toogleMenu = () => setIsOpen((preIsOpen) => !preIsOpen);

    const navRef = useRef(null)
    const [scrolled, setScrolled] = useState(false);
    const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={navRef} className={`bg-sky-50 fixed top-0 left-0 right-0 z-50 px-8 transition-all duration-1000 ease-in-out  ${scrolled ? 'opacity-0 py-2 pointer-events-none' : 'opacity-100 py-4'}`}>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center'>
                <a href='#home' className='text-sky-950 font-bold text-xl hover:text-sky-600 transition-colors'>
                    Joanne
                </a>
                <div className='flex items-center gap-4'>
                    <nav className='sm:flex hidden'>
                        <NavItems />
                    </nav>
                    <LanguageToggle />
                    <button onClick={() => toogleMenu()} className="text-black-400 hover:text-white focus:outline-none sm:hidden flex"
                aria-label="Toggle menu">
                        <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt='menu' className='w-6 h-6'/>
                    </button>
                </div>
            </div>

        </div>
        <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'} ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
            <nav className='p-5'>
                <NavItems onNavigate={() => setIsOpen(false)} />
            </nav>
        </div>
    </header>
  )
}

export default Navbar
