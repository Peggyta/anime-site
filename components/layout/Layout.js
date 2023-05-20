import React from 'react';
import Link from 'next/link';
import Menu from '../icons/Menu';

const Layout = ({children}) => {
    return (
        <div>
            <header className='max-w-6xl mx-auto flex items-center justify-between mt-6 px-10'>
                <div>
                    <Link className='text-3xl hover-links font-bold text-amber-300' href='/'>Anime Prime</Link>
                    <p className='text-amber-300 text-xs
                     italic'>your true source of watching anime!</p>
                </div>
                <div className='md:flex md:gap-12 hidden md:block'>
                    <Link className='hover-links' href='/animelist'>Anime List</Link> 
                    <Link className='hover-links' href='/category'>Category</Link>
                    <Link className='hover-links' href='/'>About Us</Link>      
                </div>
                <div className='md:hidden block'>
                    <Menu />
                </div> 
            </header>
            <div className='max-w-6xl mx-auto min-h-screen px-10'>
                {children}
            </div>
            <footer className='w-full bg-gray-900'>
                <div>
                    <p className='text-sm text-center py-4'>© 2023. All Rights Reserved.</p>
                </div>
            </footer>
        </div>  
    );
};

export default Layout;