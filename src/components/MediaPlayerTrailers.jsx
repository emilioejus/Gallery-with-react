import React, {useState, useRef, useEffect} from 'react';
import '../assets/styles/mediaPlayerTrailers.css';

const MediaPlayerTrailers = ({videos, title}) => {
    // states
    const [allVideos, setAllVideos] = useState(videos || []);

    // useRef
    const videoDom = useRef(null);
    const containerMediaPlayer = useRef(null)



    //useEffect
    useEffect(()=> {
            //intersectionObserver
    let threshold = 0.70;

    const handleIntersection = entries => {
        let entry = entries[0].intersectionRatio

        if(videoDom.current === null) {
            return
        }else if(entry >= 0.70) {
            videoDom.current.play()
        }else if(entry < 0.70) {
            videoDom.current.pause()
        }
    };

    const observer =  new IntersectionObserver(handleIntersection, {threshold: threshold});
        observer.observe(containerMediaPlayer.current)

        //visibilityChange
        document.addEventListener('visibilitychange', ()=> {
            const isVisibility = document.visibilityState === 'visible'
            isVisibility ? videoDom.current.play() : videoDom.current.pause() 
        });

            //time
    videoDom.current.addEventListener('ended', ()=> {
        const videoRotation = ()=> {
            let videoRotationIncitial = allVideos.slice(0, 1);
            let videoRotationFinal = allVideos.slice(1);

            return videoRotationFinal.concat(videoRotationIncitial)
        }
        setAllVideos(videoRotation)
    })
    }, [allVideos])


    return (
        <>
        {
        allVideos.length > 0
            ?  <div className='container_media_player'> 
                    <h1>{title}</h1>
                    <div className='container_media_player_video' ref={containerMediaPlayer}>
                        <video src={allVideos[0]} ref={videoDom} onClick={(event)=> {event.target.play()}} muted autoPlay controls width="100%" height="600px" style={{backgroundColor:"black"}}/>
                    </div>
                </div>
            :
                null
        }
        </>
    );
}

export default MediaPlayerTrailers;