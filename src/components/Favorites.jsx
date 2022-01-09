import React,{ useCallback } from 'react';
import { connect } from 'react-redux';
import { deleteFavorites } from '../actions';
import '../assets/styles/favorites.css';
import arrowR from'../assets/icons/chevron-right-solid.svg';
import arrowL from'../assets/icons/chevron-left-solid.svg';
import remove from '../assets/icons/icons-delete.png';
import play from '../assets/icons/icons-play.png';

const Favorites = (props)=> {
    const { title, favorites } = props

    // create id for queryselector
    let id = title.split(" ").join("")

    // has as value an array filled with one with the number of indicator buttons to be created
    let indicatorsButtons = new Array(Math.ceil(favorites.length / 5)).fill(1)

    // returns an array with indicator buttons
    let indicators = useCallback(()=> {
        return {
          buttons: Array.apply(null, document.querySelectorAll(`#${id} > button`))
        }
    }, [id])

    // Dom
    const fila = document.getElementById(`carousel__${title}`);

    // actions or dispatch
    const handleDeleteFavorites = movieIdOrSerieId => {
        props.deleteFavorites(movieIdOrSerieId)
    }

    return (
        <>
        {
            favorites.length > 0 &&
            <div className="categories">
            <div className="categories__indicators" id={id}>
                <h3 className="categories__title">{title}</h3>
                {/* ***** indicators buttons ***** */}
                {favorites && indicatorsButtons.map((value, i) => {
                  if(i === 0) {
                    return (
                      <button 
                      onClick={
                        (e)=> {
                          const buttonsIndicators = indicators().buttons
                          buttonsIndicators.map(buttonI => buttonI.className === 'red' ? buttonI.className = '' : buttonI)
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
                          const buttonsIndicators = indicators().buttons
                          buttonsIndicators.map(buttonI => buttonI.className === 'red' ? buttonI.className = '' : buttonI)
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
                      const buttonsIndicators = indicators().buttons
                      let indexButton = buttonsIndicators.findIndex(button => button.className === 'red');
                      if(indexButton < (indicatorsButtons.length - 1)) {
                        buttonsIndicators[indexButton].className = '';
                        buttonsIndicators[indexButton + 1].className = 'red';
                        fila.scrollLeft += fila.offsetWidth  
                      }   
                    }
                  }
                  src={arrowR} 
                  alt="arrow right"  
                  width="30px"
                />  
                {
                  favorites.map((movie) => {
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
                                  onClick={()=> handleDeleteFavorites(movie.id)}
                                    className="carousel-item__details--img" 
                                    src={remove} 
                                    alt="remove icon"/>
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
                      const buttonsIndicators = indicators().buttons    
                      let indexButton = buttonsIndicators.findIndex(button => button.className === 'red');
                      if(indexButton > 0) {
                        buttonsIndicators[indexButton].className = '';
                        buttonsIndicators[indexButton - 1].className = 'red';         
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
        }
        </>
    );
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = {
    deleteFavorites
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
