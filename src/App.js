import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";


const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<MainContainer/>
      },
      {
        path:'/watch',
        element:<WatchPage/>
      }
    ]
  }
])
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Head />
       <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
