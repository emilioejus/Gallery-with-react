import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {scrollWithIndicators} from '../actions';
import '../assets/styles/categories.css';

let Categories = (props)=> {
    const {children, title, movies, buttonIndicatorsNumber } = props;

    let indicators = document.querySelectorAll(".categories__indicators > button");
    let indicatorsArray = Array.apply(null, indicators);

    useEffect(()=> {
        if(indicatorsArray.length > 0) {
            indicatorsArray.map(b => b.className === "red" ? b.className = "" : b)
            indicatorsArray[buttonIndicatorsNumber].className = "red"
        }
    }, [buttonIndicatorsNumber])
    

    const handleSetView = num => {
        props.scrollWithIndicators(num)
    };

    return (
        <>
            <div className="categories">
                <div className="categories__indicators">
                    <h3 className="categories__title">{title}</h3>
                    {
                    movies.map((movie, i )=> {
                        if((i % 5) === 0) {
                            let id = i === 0 ? 0 : i / 5;
                            // console.log(id)
                            return (
                                <button 
                                    type="button" 
                                    onClick={
                                        (e)=> {
                                            handleSetView(id)
                                            // let indicators = document.querySelectorAll(".categories__indicators > button");
                                            // let indicatorsArray = Array.apply(null, indicators);
                                            indicatorsArray.map(b => b.className === "red" ? b.className = "" : b)
                                            e.target.className = "red"
                                        }
                                    }
                                    className={id === 0 ? "red" : ""}
                                    key={id}>
                                </button>
                            )
                        }
                    })
                    }
                </div>
                {children}
            </div>
        </>
    );
};

const mapDispatchToProps = {
    scrollWithIndicators
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);