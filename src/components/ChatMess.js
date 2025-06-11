const ChatMess = ({name,message}) => {

    return (
         <div className="flex items-center shadow-sm p-2">
             <img className="h-8" src= "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            <span className="p-1 text-sm text-wrap font-semibold text-gray-600" >{name} <span className="font-normal pl-1">{message}</span></span>
             
         </div>
    )

}

export default ChatMess;