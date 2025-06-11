import { useDispatch, useSelector } from "react-redux";
import ChatMess from "./ChatMess";
import { addMessage } from "../utils/chatSlice";
import { useEffect, useState } from "react";
import { generateRandomName,generateRandomText } from "../utils/Helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.message);
  
  const [LiveMessage, setLiveMessage] = useState();
  

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(10),
        })
      );
    }, 500);
     return () => clearInterval(i);
  }, []);

  return (
    <div className="px-2">
      <h2 className="font-bold text-xl">Live Chat</h2>
      <div className="h-[500px] w-full overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMess key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form className="border border-black p-2.5" onSubmit={(e)=> {
                  e.preventDefault();
                 dispatch(addMessage({
                    name:"Uday bikkumandla",
                    message:LiveMessage,
                  }));
                  setLiveMessage('');
      } }>
         <input className="p-2 border-black border" type="text" value={LiveMessage} onChange={(e)=> setLiveMessage(e.target.value)} />
         <button className=" bg-blue-500 p-3 text-white">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
