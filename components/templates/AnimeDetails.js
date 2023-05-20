import React from 'react';
import Image from 'next/image';
import Play from '../icons/Play';

const AnimeDetails = (props) => {
    const{id, name, age, episode, rate, quality, introduction, 
        details, manga, television} = props;
    return (
        <>
        <div className='flex flex-col lg:flex-row lg:justify-start 
        mt-12 gap-6 justify-center items-center'>
            <div>
                <Image className='rounded-lg' src={`/images/${id}.jpg`} width={300} 
                height={424} alt='anime-image' />
            </div>
            <div>
                <h3 className='sm:text-4xl lg:text-left text-center text-2xl text-blue-100'>{name} ({details[2].Year})</h3>
            <div className='flex flex-col items-center lg:items-left sm:flex-row sm:gap-4 gap-1 text-blue-300 mt-2 font-semibold text-lg'>
                <p>Age: {age ? age : 'everyone'}</p>
                <p>Rate: {rate}/10</p>
                <p>Episodes: {episode}</p>
                <p className='border px-2 rounded-lg border-blue-500'>{television[4]}</p>
            </div>
            <div className='flex sm:justify-start justify-center gap-4 mt-2'>
                <p>Genre: {details[1].Genre}</p> | 
                <p>Length: {details[3].Length}</p>
            </div>
            <div>
                <p className='text-center sm:text-left'>Quality: {quality}</p>
            </div>
            <div className='mt-4 sm:w-128 w-auto'>
                <p className='text-justify'><span className='font-semibold text-blue-300'>
                    Introduction: </span>{introduction}</p> 
            </div>
            <div className='lg:mt-16 mt-6'>
                <p>{television[0]}</p>
                <p>Countery: {details[0].Country}</p>
                <div className='w-full px-6'>
                    <button className='w-full flex justify-center items-center gap-2 bg-emerald-600 
                        text-blue-100 font-bold sm:text-2xl text-base p-3 rounded-xl 
                        hover:bg-orange-500 transition mt-12'><Play />Watch Online
                    </button>
                </div> 
            </div>
            </div>
        </div>
        
        <div className='mb-10 mt-2 lg:flex lg:justify-start lg:flex-col'>
            <h4 className='font-semibold text-center lg:text-left text-lg text-blue-300'>Manga:</h4>
            {manga.map((item, index)=> (
                <ul key={index} className='sm:w-72 lg:mx-0 py-2 w-auto mx-auto'>
                    <li className={index % 2 ? 
                        'bg-slate-800 pl-4 py-2':'bg-slate-600 text-gray-300 pl-4 py-2'}>
                        {item}</li>
                </ul>
            ))}
        </div>
        </>
    );
};

export default AnimeDetails;