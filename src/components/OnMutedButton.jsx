import React from "react";
import muted from '../assets/icons/icons-muted.png';

const OnMutedButton = ({videoDom, setToggleMuted})=> {

    return (
        <img 
            src={muted} 
            alt="On Muted"
            onClick={()=> {
                videoDom.current.muted = false
                setToggleMuted(false)
            }} 
        />
    )
}

export default OnMutedButton;