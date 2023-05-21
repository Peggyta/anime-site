import React from 'react';
import Categories from '@/components/templates/Categories';

const index = ({data}) => {
    return (
        <div>
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
      detail.Country === country );

    const yearResult = item.details.filter((detail)=>
    detail.Year === year);

    const genreResult = item.details.filter((detail)=>
    detail.Genre === genre);

    if(!countryResult && !yearResult && genreResult) {
      return item;
    } else if(!yearResult && !genreResult && countryResult) {
      return item;
    } else if(!genreResult && !countryResult && yearResult) {
      return item;
    }
  });

  return {
    props: {
      data: filteredAnime
    }
  };
}