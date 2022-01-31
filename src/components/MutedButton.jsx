import React from "react";
import onMuted from '../assets/icons/icons-onmuted.png';

const MutedButton = ({ videoDom, setToggleMuted })=> {

    return (
        <img 
            src={onMuted} 
            alt="Muted" 
            onClick={()=> {
                videoDom.current.muted = true
                setToggleMuted(true)
            }}
        />
    )
}

export default MutedButton;