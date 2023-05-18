import React from 'react';
import Link from 'next/link';

const Layout = ({children}) => {
    return (
        <div>
            <header className='max-w-6xl mx-auto flex justify-between mt-6'>
                <div>
                    <Link className='text-3xl font-bold' href='/'>Anime Prime</Link>
                </div>
                <div className='flex gap-12'>
                    <Link href='/'>Anime List</Link>
                    <Link href='/'>Category</Link>
                </div> 
            </header>
            <div className='max-w-6xl mx-auto min-h-screen'>
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