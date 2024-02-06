import Link from 'next/link';
import React from 'react';
import Brand from '../brand/Brand';
import ThemeToggle from '../theme/themeToggle/ThemeToggle';

const Navbar = () => {
    return (
        <div className='w-full h-[80px] flex justify-center items-center sticky top-0 z-50 bg-th-navbar border-b border-b-gray-400 border-opacity-10 dark:border-opacity-50 backdrop-blur-md'>
            <nav className='flex justify-between items-center w-full h-full max-w-screen-xl px-6 text-th-t-navbar'>
                <Brand />
                <ul className='flex gap-8 items-center text-th-t-navbar font-semibold tracking-wider md:text-base text-sm'>
                    <li className='hidden md:block '>
                        <Link href='/'>Home</Link>
                    </li>
                    <li >
                        <ThemeToggle />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar