

function VideoCard({info}) {

    //console.log(info);

    const {snippet,statistics} = info;
    const {title,thumbnails,channelTitle} = snippet;
    const {viewCount} = statistics;

    //console.log(snippet.categoryId);
  return (
    <div className="m-5 shadow-lg w-72 p-2.5 h-80">
         <img   className=" rounded-lg" alt="videoimage" src={thumbnails.medium.url} />
        <ul className="p-2">
            <li className="font-bold">{title}</li>
            <li>{channelTitle}</li>
            <li>{viewCount} views</li>
        </ul>

    </div>
  )
}

export const AdVideoCard = ({info}) => {

    return (
      <div className="border border-red-500">
           <VideoCard info={info} />
      </div>
       
    )

}
export default VideoCard;