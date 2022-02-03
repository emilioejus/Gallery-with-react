import React from 'react';
import play from '../assets/icons/icons-play.png';
import '../assets/styles/mediaPlayer.css';


const MediaPlayer = () => {

    return (
        <div className='container_media_player'>
            <video />
            <img src={play} alt="play"  onClick={()=> alert('If you want to see the video hire me xD!!!')} controls/>
        </div>
    )
};

export default MediaPlayer;