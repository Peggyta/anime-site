import React from 'react';
import FaceBook from '../icons/FaceBook';
import Twitter from '../icons/Twitter';
import Whatsapp from '../icons/Whatsapp';
import Link from 'next/link';

const SocialMedia = () => {
    return (
        <div className='flex-col'>
           <div className='bg-sky-800 social-container'>
                <a className='social-media' href='#'><FaceBook /></a>
            </div>
           <div className='bg-blue-600 social-container'>
                <a className='social-media' href='#'><Twitter /></a>
            </div>
           <div className='bg-green-600 social-container'>
                <a className='social-media' href='#'><Whatsapp /></a>
            </div>
        </div>
    );
};

export default SocialMedia;