import "../styles/App.css";
import Navbar from "./Navbar";
import Categories from "./Categories";
import {BrowserRouter,Routes, Route} from "react-router-dom"; 
import { createContext,useState,useEffect } from "react";
import Dealoftheday from "./Dealoftheday/Dealoftheday";
import Trendingdeals from "./Trendingdeals";
import Subcategorie from "./Subcategorie";
import Home from "./Home";



export const App=()=> {
  return (
  <div className="App">
    {/* <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
  </Routes>
  </BrowserRouter> */}
  <Home/>
  </div>
  )
}

//export default App;
