import React from 'react';
import '../assets/styles/carouselItem.css';
// import {Link} from 'react-router-dom';


let CarouselItem = (props)=> { 
    // props
    let { movie } = props

    // api

    // function

    return (
        // <div className='carousel-container-item'>
            <div className="carousel-item">
              <img className="carousel-item__img" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="Poster"  />
              <div className="carousel-item__details">
                  <div>
                      <img 
                        className="carousel-item__details--img" 
                        src={""} 
                        alt="Delete Icon" 
                      />
                  </div>
                  <div>
                      <p className="carousel-item__details--title">{}  </p>
                      <p className="carousel-item__details--subtitle">Likes: {} </p> */
                      {/* {/* <span className=""  ></span><Link to={{ pathname: '/PageBookDetails', state: { book: books} }}>See book details</Link> */}
                  </div>
              </div>
            </div>
        // </div>
    );
};

export default CarouselItem;