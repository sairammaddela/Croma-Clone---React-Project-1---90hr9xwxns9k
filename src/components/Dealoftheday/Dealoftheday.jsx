import { useEffect,useState } from "react";
import React from "react";
import "./style.css";
import left from "./leftarrow.svg";
import right from "./rightarrow.svg";
import Rating from "../Rating";
const Dealoftheday=()=>{
    const [getdeal,setdeal]=useState();
    const [getleftopacity,setleftopacity]=useState(0.3);
    const [getrightopacity,setrightopacity]=useState(1);
    useEffect(()=>{
        fetch(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?sort={"price":1}`,{
            method:"GET",
        headers:{
            projectId: "90hr9xwxns9k"
        }
        }).then(data=>{
            data.json().then(data1=>{
                setdeal(data1.data);
                //console.log(getdeal,"test");
            })
        })
    },[]);

    const [gettransform,settransform]=useState(0);
    var leftarrowhandler=()=>
    {
        if(getrightopacity===0.3 &&gettransform===-391)
        {
            setrightopacity(1);
        }
        if(gettransform!==0)
        {
            settransform(gettransform+23);
        }
        else
        {
            setleftopacity(0.3);
        }
        
    }
    var rightarrowhandler=()=>
    {
        if(getleftopacity===0.3&&gettransform===0)
        {
            setleftopacity(1);
        }
        if(gettransform!==-391)
        {
            settransform(gettransform-23);
        }
        else
        {
            setrightopacity(0.3);
        }
    }
    return(
        <div className="dealoftheday">
            <h2>Deals Of The Day</h2>
           <div id="dodflex">
            <img src={left} className="arrow" alt="leftarrow" onClick={leftarrowhandler} style={{opacity:getleftopacity}}/>
            <div id="dodfunctionality">
            <div className="dodsection" style={{transform:`translateX(${gettransform}rem`}}>
                
            {
                getdeal?.map(val=>{
                    return <div className="dodcard"><img className="dodimg" src={val.displayImage} alt={val.deal}/><span className="dodname">{val.name}</span><span>{`₹${val.price}`}</span><Rating ratings={val.ratings}/></div>
                })
            }
            
            </div>
            </div>
            <img src={right} className="arrow" alt="rightarrow" onClick={rightarrowhandler} style={{opacity:getrightopacity}}/></div>
            
        </div>
    )
}
export default Dealoftheday;