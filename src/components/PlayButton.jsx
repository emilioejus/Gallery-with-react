import React from 'react';
import play from '../assets/icons/icons-play.png';

const PlayButton = ({videoDom, setTogglePlay})=> {

    return (
        <img 
            src={play} 
            alt="" width={30} 
            onClick={()=> {
                videoDom.current.play() 
                setTogglePlay(true)
                // videoDom.current.addEventListener('ended', (event)=> {endOfVideo = event.timeStamp
                //     console.log(endOfVideo)
                // })
        }} 
        />
    )
}

export default PlayButton;