import React from 'react';
import Categories from '@/components/templates/Categories';

const index = ({data}) => {
    return (
        <div className=''>
          <Categories data={data} />  
        </div>
    );
};

export default index;

export async function getServerSideProps(context) {
  const{
    query: {
      year, country, genre
    }
  } = context;
  const res = await fetch(`${process.env.BASE_URL}/anime`)
  const data = await res.json();

  const filteredAnime = data.filter((item)=> {
    const countryResult = item.details.filter((detail)=>
      detail.Country && detail.Country === country);

    const yearResult = item.details.filter((detail)=>
    detail.Year && detail.Year === year);

    const genreResult = item.details.filter((detail)=>
    detail.Genre && detail.Genre === genre);

    if(country && year && genre &&
      countryResult.length && yearResult.length && genreResult.length) {
        return item;
    } else if(!country && !year && genre && genreResult.length) {
      return item;
    } else if(!year && !genre && country && countryResult.length) {
      return item;
    } else if(!genre && !country && year && yearResult.length) {
      return item;
    } else if (!year && genre && country && genreResult.length && countryResult.length) {
      return item;
    } else if (!genre && year && country && yearResult.length && countryResult.length) {
      return item;
    } else if (!country && genre && year && genreResult.length && yearResult.length) {
      return item;
    } 
  });

  return {
    props: {
      data: filteredAnime
    }
  };
}