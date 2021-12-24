import React, {useState, useEffect} from 'react';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem'

const Home = ()=> {
    const [movies, setMovies] = useState([]);
    const apiKey = 'b89fc45c2067cbd33560270639722eae';
    // const id = 3;

    useEffect(()=> {
        // const usrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
        const url2 = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
        fetch(url2)
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }, [])

    return(
        <Categories title="Todos Las Peliculas" movies={movies}>
            <Carousel>
                {
                    movies.length > 0 
                        ? movies.map(movie => <CarouselItem movie={movie} key={movie.id}/>)
                        : null
                }
            </Carousel>
        </Categories>
    )
}

export default Home;
