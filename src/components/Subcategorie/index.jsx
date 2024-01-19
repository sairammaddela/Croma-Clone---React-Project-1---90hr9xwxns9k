import React,{useState,useEffect,useRef} from "react";
import left from "./leftarrow.svg";
import right from "./rightarrow.svg";
import Rating from "../Rating";
const Subcategorie=(props)=>{
    const [getdeal,setdeal]=useState();
    const [getleftopacity,setleftopacity]=useState(0.3);
    const [getrightopacity,setrightopacity]=useState(1);
    useEffect(()=>{
        fetch(`https://academics.newtonschool.co/api/v1/ecommerce/electronics/products?filter={"subCategory":"${props.sub}"}`,{
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
        if(getrightopacity===0.3 &&gettransform===-(getdeal?.length-3)*23)
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
        if(gettransform!==-(getdeal?.length-3)*23)
        {
            settransform(gettransform-23);
        }
        else
        {
            setrightopacity(0.3);
        }
    }
    async function handlerror(image,i)
    {
        let res=await fetch(image);
        ///let finalvalue=await res.json();
        //console.log(res.status);
        if(res.status!==200)
        {
            setdeal(getdeal.slice(0,i).concat(getdeal.slice(i+1)));
        }
        // if(res.status===404)
        // {
        //    // bool.current=true;
        //    //settopdeal(filterarray);
        // }
        return res.status;
        // let filterarray=gettopdeal.filter(val=>{
        //     let re=await fetch(`${gettopdeal[2].displayImage}`);
        //     return val.displayImage!==e.target.src;
        // });
        //settopdeal(filterarray);
        //console.log(gettopdeal.length,"length");
    }
    getdeal?.forEach((element,index) => {
        handlerror(element.displayImage,index)
    });
    return(
        <div className="trendingdeal">
            <h2>{props.sub}</h2>
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
export default Subcategorie;