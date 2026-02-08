'use client'
import Link from 'next/link'
import { useState } from 'react';
import { Menu, Moon, Sun } from 'lucide-react'
import ThemeToggle from '../ThemeToggle';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='sticky top-0 left-0 right-0 z-50 w-full'>
            <div className='backdrop-blur-md bg-white dark:bg-black/10 border-b border-white dark:border-white/10'>
                <div className='flex items-center justify-between px-6 py-4 max-w-7xl mx-auto'>
                    <div className='font-bold text-lg'>
                        AllenKalbs
                    </div>
                    <div className='hidden md:block lg:block'>
                        <ul className='flex space-x-6'>
                            <li className='hover:text-gray-300 transition-colors'>
                                <Link href="/">Home</Link>
                            </li>
                            <li className='hover:text-gray-300 transition-colors'>
                                <Link href="/about">About</Link>
                            </li>
                            <li className='hover:text-gray-300 transition-colors'>
                                <Link href="/projects">Projects</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className='flex gap-x-3'>
                            <div>
                                    <ThemeToggle />

                            </div>
                            <button
                                className="md:hidden lg:hidden"
                                onClick={toggleMenu}
                            >
                                <Menu />
                            </button>

                        </div>


                        {isOpen && (
                            <div className="absolute top-full left-0 w-full bg-white dark:bg-black/10 border-t border-white dark:border-white/10 md:hidden lg:hidden">
                                <ul className="flex flex-col items-center space-y-4 py-4">
                                    <li className='hover:text-gray-300 transition-colors'>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className='hover:text-gray-300 transition-colors'>
                                        <Link href="/about">About</Link>
                                    </li>
                                    <li className='hover:text-gray-300 transition-colors'>
                                        <Link href="/projects">Projects</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
