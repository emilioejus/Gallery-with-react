import React from 'react';
import CarouselMM from '../components/CarouselMM';

const Home = ()=> {
    const apiKey = 'b89fc45c2067cbd33560270639722eae';
    // details
    const url = {
        moviePopular: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`,
        movieDetails: `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${apiKey}&language=en-US`,
        movieTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
        tvPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`,
        tvTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`
    }
    // popular
    // const url2 = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

    return(
        <>
        <CarouselMM title="20 most popular" url={url.moviePopular}/>
        <CarouselMM title="Top rated" url= {url.movieTopRated} />
        <CarouselMM title="Tv popular" url={url.tvPopular}/>
        <CarouselMM title="Tv top rated" url={url.tvTopRated} />
        </>
    )
}

export default Home;
