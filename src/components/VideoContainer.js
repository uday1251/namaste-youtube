import { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constant";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {

    const [videoList,setVideoList] = useState([]);
    useEffect(()=>{
        
        getVideos();

    },[]);

    const getVideos = async ()=> {

        const data = await fetch(YOUTUBE_API_URL);

        const json = await data.json();
        // console.log(json?.items);
        setVideoList(json?.items);

    } 
     return (
         <div className="flex flex-wrap">

             {videoList['0'] && <AdVideoCard info={videoList['0']} /> }   
             {
                videoList.map((video) =><Link  key={video.id} to={`/watch?v=${video.id}`}><VideoCard info={video}/></Link> )
             }
               
                
         </div>
     );
};

export default VideoContainer;
