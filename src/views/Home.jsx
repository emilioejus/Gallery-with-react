import React from 'react';
import CarouselMM from '../components/CarouselMM';

const Home = ()=> {
    const apiKey = 'b89fc45c2067cbd33560270639722eae';
    const url2 = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

    return(
        <>
        <CarouselMM  title="Principal" url={url2}/>
        </>
    )
}

export default Home;
