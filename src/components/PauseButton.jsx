import React from 'react';
import pause from '../assets/icons/icons-pause.png';

const PauseButton = ({videoDom, setTogglePlay})=> {

    return (
        <img 
            src={pause} 
            alt="" width={30} 
            onClick={()=> {
                videoDom.current.pause()
                setTogglePlay(false)
                // videoDom.current.addEventListener('ended', (event)=> {endOfVideo = event.timeStamp
                //     console.log(endOfVideo)
                // })
            }} 
        />
    )
}

export default PauseButton;