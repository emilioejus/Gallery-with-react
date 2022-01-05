import React, {useState, useEffect, useCallback} from 'react';
import '../assets/styles/carouselMM.css';
import arrowR from'../assets/icons/chevron-right-solid.svg';
import arrowL from'../assets/icons/chevron-left-solid.svg';
import plus from '../assets/icons/icons-plus.png';
import play from '../assets/icons/icons-play.png';

const CarouselMM = (props) => {
    const {title, url} = props
    // State
    const [movies, setMovies] = useState([]);
    // this state is an array containing one element for each indicator button
    const [buttons, setButtons] = useState(null);
    
    // Efect
    useEffect(()=> {
      const call =       async ()=> {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results)
        setButtons(new Array(Math.ceil(data.results.length / 5)).fill(1))
      }
       call()
    }, []);

    // returns an array with indicator buttons
    let buttonss = useCallback(()=> {
      return {
        indicators: Array.apply(null, document.querySelectorAll(`#categories__${title} > button`))
      }
    }, [])

    // Dom
    const fila = document.getElementById(`carousel__${title}`);

    return (
        <>
        <div className="categories">
            <div className="categories__indicators" id={`categories__${title}`}>
                <h3 className="categories__title">{title}</h3>
                {/* ***** indicators buttons ***** */}
                {buttons && buttons.map((value, i) => {
                  if(i === 0) {
                    return (
                      <button 
                      onClick={
                        (e)=> {
                          console.log(buttonss())
                          buttonss().indicators.map(buttonI => buttonI.className === 'red' ? buttonI.className = '' : buttonI)
                          e.target.className='red'
                          fila.scrollLeft = i * fila.offsetWidth
                        }
                      }
                      className='red' 
                      key={i}>
                    </button>
                    )  
                  }else {
                    return (
                      <button 
                      onClick={
                        (e)=> {
                          buttonss().indicators.map(buttonI => buttonI.className === 'red' ? buttonI.className = '' : buttonI)
                          e.target.className='red'
                          fila.scrollLeft = i * fila.offsetWidth
                        }
                      } 
                      className=''
                      key={i}>
                      </button>
                    )
                  }
                })}
            </div>
            <section className="carousel">
              <div className="carousel__container" id={`carousel__${title}`}>
              {/* ***** arrow right ***** */}
                <img className="arrow_left" 
                  onClick={
                    ()=> {
                      let indexButton = buttonss().indicators.findIndex(button => button.className === 'red');
                      if(indexButton < (buttons.length - 1)) {
                        buttonss().indicators[indexButton].className = '';
                        buttonss().indicators[indexButton + 1].className = 'red';
                        fila.scrollLeft += fila.offsetWidth  
                      }   
                    }
                  }
                  src={arrowR} 
                  alt="arrow right"  
                  width="30px"
                />  
                {
                  movies.map((movie) => {
                      return (
                          <div className="carousel-item" key={movie.id}>
                              <img className="carousel-item__img" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="Poster"  />
                              <div className="carousel-item__details">
                                <div>
                                  <img 
                                      className="carousel-item__details--img" 
                                      src={play} 
                                      alt="plus icon"/>
                                  <img 
                                    className="carousel-item__details--img" 
                                    src={plus} 
                                    alt="plus icon"/>
                                </div>
                                <div>
                                    <p className="carousel-item__details--title">{movie.original_title}  </p>
                                    <p className="carousel-item__details--subtitle">{movie.original_language}</p> */
                                </div>
                              </div>
                          </div>
                      )
                  })
                }
                {/* ***** arrow left ***** */}
                <img className="arrow_right" 
                  onClick={
                    ()=> {          
                      let indexButton = buttonss().indicators.findIndex(button => button.className === 'red');
                      if(indexButton > 0) {
                        buttonss().indicators[indexButton].className = '';
                        buttonss().indicators[indexButton - 1].className = 'red';         
                        fila.scrollLeft -= fila.offsetWidth; 
                      }
                    }
                  }
                  src={arrowL} 
                  alt="arrow left"  
                  width="30px"/>
              </div>
            </section>
        </div>
        </>
    )
}

export default CarouselMM;