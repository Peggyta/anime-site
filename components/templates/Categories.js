import React, {useState} from 'react';
import Image from 'next/image';
import category from '../../public/images/category.jpg';

const Categories = () => {
    const[query, setQuery] = useState({genre:"", country:"", year:""});
    return (
        <div className='flex justify-between mt-12'>
           <div className='flex items-center shadow-lg rounded-xl 
           gap-6 bg-gray-900 outline-dotted outline-emerald-500 h-20 px-16'>
            <div>
                <select className='select-option'>
                    <option value=" ">Genre</option>
                    <option>Adventure</option>
                    <option>Comedy</option>
                    <option>Music</option>
                    <option>Seinen</option>
                    <option>Shounen</option>
                </select>
            </div>
            <div>
                <select className='select-option'>
                    <option value=" ">Country</option>
                    <option>China</option>
                    <option>Japan</option>
                </select>
            </div>
            <div>
            <select className='select-option'>
                    <option value=" ">Year</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2019</option>
                </select>
            </div>
            <div>
                <button className='bg-emerald-800 px-5 rounded-lg transtion duration-75
                font-semibold text-blue-300 hover:bg-emerald-600 hover:ease-in py-1'>Search</button>
            </div>
           </div>
            <div>
                <Image src={category} alt='category'
                width={397}
                height={622} />
            </div> 
        </div>
    );
};

export default Categories;