import React from 'react';
import Image from 'next/image';
import banner from '../../public/images/banner.jpg';

const Banner = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-72'>
                <h2 className='mb-6 font-bold text-lg'>Watch Anime Online Free</h2>
                <p className='text-justify'>It all started in 2016 when we officially launched the system
                of file sharing. We boast HD quality as well as fast download speed. 
                To provide our users with multiple choices, we use links from third 
                party sources like mp4upload, vidstream, streamtape, mycloud. 
                </p>
            </div>
            <div>
                <Image
                src={banner}
                alt='banner'
                width={550}
                />
            </div>
        </div>
    );
};

export default Banner;