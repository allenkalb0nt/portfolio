'use client'
import { useState } from 'react'
import ThemeToggle from '../ThemeToggle';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        closeMenu()
    }

    return (
        <nav className='sticky top-0 left-0 right-0 z-50 w-full'>
            <div className='backdrop-blur-md bg-white/80 dark:bg-black/10 border-b border-gray-200 dark:border-white/10'>
                <div className='flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 max-w-7xl mx-auto'>
                    <div className='font-bold text-base sm:text-lg'>
                        AllenKalbs
                    </div>

                    {/* Desktop Navigation - visible on lg and above */}
                    <div className='hidden lg:block'>
                        <ul className='flex space-x-6 text-base'>
                            <li>
                                <button onClick={() => scrollToSection('home')} className='cursor-pointer hover:scale-105 transition-transform'>Home</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('about')} className='cursor-pointer hover:scale-105 transition-transform'>About</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('projects')} className='cursor-pointer hover:scale-105 transition-transform'>Projects</button>
                            </li>
                        </ul>
                    </div>

                    <div className='flex items-center gap-3'>
                        <ThemeToggle />

                        {/* Burger Menu Button - visible on mobile and tablet (sm and md) */}
                        <button
                            onClick={toggleMenu}
                            className='lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5'
                            aria-label='Toggle menu'
                        >
                            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - visible on mobile and tablet (sm and md) */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className='flex flex-col space-y-2 px-4 py-4 border-t border-gray-200 dark:border-white/10'>
                        <li>
                            <button onClick={() => scrollToSection('home')} className='block py-2 w-full text-left cursor-pointer hover:scale-105 transition-transform'>Home</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('about')} className='block py-2 w-full text-left cursor-pointer hover:scale-105 transition-transform'>About</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('projects')} className='block py-2 w-full text-left cursor-pointer hover:scale-105 transition-transform'>Projects</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
