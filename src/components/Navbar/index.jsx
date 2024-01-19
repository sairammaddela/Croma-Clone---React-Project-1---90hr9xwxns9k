import logo from "./Croma_Logo_acrkvn.svg"
import icon from "./Menu_icon.svg";
import "./styles.css";
import Input from "../Textinput/index";
import loc from "./location.svg";
import profile from "./profile.svg";
import cart from "./carticon.svg";
import Menuholder from "../MenuHolder";
import { useState,useContext } from "react";
import { store } from "../Home";
const Navbar=()=>{
    const [getcatarr,setcatarr]=useContext(store);
    console.log(getcatarr);
    const styless={
        placeholder:"What are you looking for?",
        "margin-left": "4rem",
        width: "27rem",
        height: "1.8rem",
        "border-radius": "4px",
        padding:"0.5rem"
    }
    const [getboole,setboole]=useState(false);
    function clickHandler()
    {
        if(!getboole)
        setboole(true);
        else
        setboole(false);
    }
    return(
        <div className="navbar">
            <img src={logo} alt="logo" id="cromalogo"/>
            <div className="menusection" onClick={clickHandler}>
            <img src={icon} alt="icon" id="menuicon"/>
            <span>Menu</span>
            <Menuholder bool={getboole} catarr={getcatarr}/>
            </div>
            
            <Input styles={styless}/>
            <img src={loc} alt="location" id="locationicon"/>
            <span>Mumbai 501505</span>
            <img src={profile} alt="profile" id="profileicon"/>
            <img src={cart} alt="caraticon" id="carticon"/>

        </div>
    )
}
export default Navbar;