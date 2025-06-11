import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const disptch = useDispatch();

  const tooglemenuHandler = () => {
    disptch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  


  const searchCache = useSelector((store)=>store.search);

 
  useEffect(() => {
    //getSearchSuggestions();
    const timmer = setTimeout(() => {
        if(searchCache[searchQuery])
        {
            setSuggestions(searchCache[searchQuery]);
        }
        else{
             getSearchSuggestions()
        }   
       
    }, 200);
    return () => {
      clearTimeout(timmer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    if (searchQuery != "") {
      console.log("API Call:  " + searchQuery);
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const searchJson = await data.json();
      setSuggestions(searchJson[1]);
        disptch(
            cacheResults(
                {
                    [searchQuery]:searchJson[1],
                })
        );
      //console.log(searchJson[1]);
    }
  };

  return (
    <div className=" grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={tooglemenuHandler}
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          alt="menu"
        />
        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="Logo"
        />
      </div>

      <div className="col-span-10">
        <div>
          <input
            type="text"
            className="border border-gray-200 w-1/2 rounded-l-full p-2 px-5"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className=" rounded-r-full border border-gray-400 px-5 p-2 bg-gray-300">
            🔍
          </button>
        </div>

        {showSuggestions && suggestions.length>0 && (
          <div className=" bg-white shadow-lg w-1/3 absolute">
            <ul className="border border-gray-300 rounded-xl">
              {suggestions.map((sugest) => (
                <li className="border-b-gray-200 border py-2 px-5 cursor-pointer hover:bg-gray-100 ">
                  🔍 {sugest}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
