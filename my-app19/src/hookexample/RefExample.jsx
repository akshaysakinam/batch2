import React, { useEffect, useRef, useState } from 'react'
import Video from './video.mp4'
const RefExample = () => {
    const[play,setPlay]=useState(true);
    const eleRef=useRef();
    let videoRef = useRef();
    useEffect(()=>{
        eleRef.current.style.color="crimson";
        eleRef.current.innerText="React Ref";
    },[])

    let playOrPause=()=>{

        if(play===true){
            videoRef.current.play();
            setPlay(false);
        }else{
            videoRef.current.pause();
            setPlay(true);
        }
    }
  return (
    <div>
        <h1 ref={eleRef}>React lecture</h1>
        <video style={{width:'500px',height:'400px'}} src={Video} ref={videoRef} onClick={playOrPause}></video>
    </div>
  )
}

export default RefExample