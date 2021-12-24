import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {arrowRightIndicator} from '../actions';
import '../assets/styles/carousel.css';
import arrowR from'../assets/icons/chevron-right-solid.svg';
import arrowL from'../assets/icons/chevron-left-solid.svg';

let Carousel = (props)=> {
const {children, buttonIndicatorsNumber} = props
  const fila = document.querySelector(".carousel__container");

  // setTimeout(()=> console.log(props ), 3000)

  
  useEffect(()=> {    
    if(fila != null) {
      fila.scrollLeft = buttonIndicatorsNumber * fila.offsetWidth
    }  
  },[buttonIndicatorsNumber ])

    return (
        <>
        <section className="carousel">
          <div className="carousel__container">
            <img className="arrow_left" 
              onClick={
                ()=> {
                  fila.scrollLeft += fila.offsetWidth  
                  props.arrowRightIndicator(buttonIndicatorsNumber)
                }
                
              }
              src={arrowR} 
              alt=""  width="30px"
            />  

            {children}
            
            <img className="arrow_right" 
              onClick={
                ()=> {
                  // const fila = document.querySelector(".carousel__container");
                  console.log(fila.offsetWidth / fila.scrollLeft )

                  fila.scrollLeft -= fila.offsetWidth; 
                }
              }
              src={arrowL} 
              alt=""  width="30px"/>
          </div>
        </section>
        </>
    );
};

const mapDispatchToProps = {
  arrowRightIndicator
}

const mapStateToProps = state=> {

  return state
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);