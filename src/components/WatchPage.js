import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import { clearMessage } from "../utils/chatSlice";

function WatchPage() {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
    dispatch(clearMessage());
  }, []);
  return (
    <div className="flex flex-col">
      <div className="flex p-5 col-span-10">
        <iframe
          width="900"
          height="600"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="video title"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

         <div className="col-span-2">
             <LiveChat />
         </div>
        
      </div>
      <div className="p-5 w-4/5">
        <CommentContainer />
      </div>
    </div>
  );
}

export default WatchPage;
