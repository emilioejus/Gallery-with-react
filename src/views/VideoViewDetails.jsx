import React from 'react';
import { connect } from 'react-redux';
import MediaPlayer from '../components/MediaPlayer';

const VideoViewDetails = ({details})=> {


    return (
        <>
        <h1 style={{color:"white"}}>{details.title || details.name}</h1>
        <MediaPlayer />
        </>
    )
};

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(VideoViewDetails); 