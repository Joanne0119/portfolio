import { useState } from 'react';
import { navLinks } from '../constant/index.js';

const NavItems = () => {

    return (
        <ul className='nav-ul'>
            {
                navLinks.map((item) => (
                    <li key={item.id} className='nav-li'>
                        <a href={item.href} className='nav-li_a'
                            onClick={() => {}}>
                            { item.name }
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); //isOpen is a variable and setIsOpen is a function to change the isOpen state
    const toogleMenu = () => setIsOpen((preIsOpen) => !preIsOpen);
  return (
    <header className='fix-top-0 fix-right-0 fix-left-0 z-50 bg-black-90'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between'>
                <a href='/' className='text-sky-950 font-bold text-xl hover:text-sky-600 transition-colors'>
                    Joanne
                </a>
                <button onClick={() => toogleMenu()} className="text-black-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
                    <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt='menu' className='w-6 h-6'/>
                </button>
                <nav className='sm:flex hidden'> {/* small devices show this, others do not */}
                    <NavItems />
                </nav>
            </div>

        </div>
        <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <nav className='p-5'>
                <NavItems />    
            </nav>
        </div>
    </header>
  )
}

export default Navbar