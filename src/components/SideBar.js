import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

   // if(!isMenuOpen) return null;
  return !isMenuOpen ? null : (
    <div className="p-5 w-48 shadow-lg fle">
      <ul className="">
        <li className="hover:bg-gray-200 p-2"><Link  to={"/"}>🏡 Home</Link></li>
        <li className="hover:bg-gray-200 p-2">📻 Shorts</li>
        <li className="hover:bg-gray-200 p-2">👁️‍🗨️ watch Latter</li>
      </ul>

      <h1 className="font-bold p-1">You</h1>
      <hr className="border-b border-black-50" />

      <ul className="">
        <li className="hover:bg-gray-200 p-2">History</li>
        <li className="hover:bg-gray-200 p-2">Playlists</li>
        <li className="hover:bg-gray-200 p-2">Your Videos</li>
        <li className="hover:bg-gray-200 p-2">Likd Videos</li>
      </ul>

      <h1 className="font-bold p-1">Subscriptions</h1>
      <hr className="border-b border-black-50" />
      <ul className="">
        <li className="hover:bg-gray-200 p-2">Abn News</li>
        <li className="hover:bg-gray-200 p-2">Tv5</li>
        <li className="hover:bg-gray-200 p-2">Namaste React</li>
        <li className="hover:bg-gray-200 p-2">Ntv</li>
        <li className="hover:bg-gray-200 p-2">MahaNews</li>
        <li className="hover:bg-gray-200 p-2">Tv9</li>
        <li className="hover:bg-gray-200 p-2">V6 Telugu News</li>
        <li className="hover:bg-gray-200 p-2">Akshay Sani</li>
      </ul>
    </div>
  );
};

export default SideBar;
