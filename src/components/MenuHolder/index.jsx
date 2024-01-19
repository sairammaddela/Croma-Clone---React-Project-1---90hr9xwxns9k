import { useEffect, useState } from "react";
import "./style.css"
const Menuholder=(props)=>{
    //const [getarr,setarr]=useState();
    // useEffect(()=>{
    //     fetch("https://academics.newtonschool.co/api/v1/ecommerce/electronics/categories",{
    //         method:"GET",
    //         headers:{
    //             projectId: "90hr9xwxns9k"
    //         }
    //     }).then(data=>{
    //         data.json().then(data1=>{
    //             setarr(data1.data);
    //         })
    //     })
    // },[]);
    const {bool}=props;
    let [getstyleheight,setstyleheight]=useState({
        height:"0rem"
    });
    
        if(bool&&getstyleheight.height!="17rem")
        {

            setstyleheight({height:"17rem"});
        }
        else if(getstyleheight.height!=="0rem"&&!bool)
        {
            setstyleheight({height:"0rem"});
        }
    
    
        return(
            <div className="Menulist" style={getstyleheight}>
                <ul className="categorylist">
                {props.catarr?.map(val=>{
                    return <li>{val}</li>;
                })}
                </ul>
            </div>
        )
    
}
export default Menuholder;