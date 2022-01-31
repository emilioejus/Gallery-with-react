import React from 'react';
import CarouselMM from '../components/CarouselMM';
import Favorites from '../components/Favorites';
import MediaPlayerTrailers from '../components/MediaPlayerTrailers';
import videoSpiderman from '../assets/videos/spiderman.mp4';
import videEternals from '../assets/videos/eternals .mp4';

let videos = [videEternals, videoSpiderman];

const Home = ()=> {
    const apiKey = 'b89fc45c2067cbd33560270639722eae';

    // APIS
    const url = {
        moviePopular: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`,
        movieDetails: `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${apiKey}&language=en-US`,
        movieTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
        tvPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`,
        tvTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`
    }

    return(
        <>
        <MediaPlayerTrailers title="Trailers" videos={videos} />
        <Favorites title="Favorites"/>
        <CarouselMM title="Popular Movies" url={url.moviePopular}/>
        <CarouselMM title="Top Rated Movies" url= {url.movieTopRated} />
        <CarouselMM title="popular Tv" url={url.tvPopular}/>
        <CarouselMM title="Top Rated Tv" url={url.tvTopRated} />
        </>
    )
}

export default Home;
