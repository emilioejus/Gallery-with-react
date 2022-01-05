import React, {useState, useEffect} from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

const Slider = ({url})=> {
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        const call =       async ()=> {
            const res = await fetch(url);
            const data = await res.json();
            let poster = data.results.map(movie => {
                return {url: `https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            });
            setMovies(poster)
        }
        call()
    }, []);

    return (
        <div>
            <center>
                <SimpleImageSlider
                width={896}
                height={504}
                images={movies}
                // showBullets={true}
                showNavs={true}
            />
            </center>
        </div>
    )
}

export default Slider;