import React, {useState, useRef, useMemo, useEffect} from 'react';
import { connect } from 'react-redux';
import '../assets/styles/searchVideos.css';

const SearchVideos = ({allVideos})=> {
    //useState
    const [search, setSearch] = useState('');

    //useRef
    const searchInput = useRef(null);    

    //funtions
    const handleSearch = ()=> {
        setSearch(searchInput.current.value)
    };

    const filterMovieOrSerie = allVideos.filter(obj => {
        if(search.length <= 0 ) {
            return null
        }else if(obj.title){
            return obj.title.toLowerCase().includes(search.toLowerCase())
        }else if(obj.name) {
            return obj.name.toLowerCase().includes(search.toLowerCase())
        }
        return null
    });
    // console.log(allVideos)

    // const filterMovieOrSerie = useMemo(()=>
    //     allVideos.filter(obj => {
    //         if(obj.title){
    //             return obj.title.toLowerCase().includes(search.toLowerCase())
    //         }else if(obj.name) {
    //             return obj.title.toLowerCase().includes(search.toLowerCase())
    //         }
    //     },[allVideos, search])
    // )
    // console.log(filterMovieOrSerie)
    return (
        <div className='container_search'>
            <h1>Search</h1>
            <center>
                <input type="text" class="form-control" placeholder='search for' ref={searchInput} onChange={handleSearch}></input>
            </center>
            <div className='container_search_video' >
                {
                    filterMovieOrSerie.length > 0 
                        ? filterMovieOrSerie.map(e => {
                            return (<img key={e.id} src={`https://image.tmdb.org/t/p/w342${e.poster_path}`} alt="imagen"/>)
                        })
                        : null
                }
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(SearchVideos);