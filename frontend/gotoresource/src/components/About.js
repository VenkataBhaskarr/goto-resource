import axios from "axios"
import MediaCard from "./MediaCard"
import { useState, useEffect } from "react";
export default function About(){
    const [data, setData] = useState(null);
     useEffect(() => {
      axios
        .get('http://localhost:5000/data')
        .then((res) => {
          setData(res.data)
        }).catch(err => console.log(err)) 
     },[]);
   if(data){
    return(
        <div>
           {
               data.map((element)=><MediaCard name={element.name} age={element.age}/>)
           }
        </div>
    )
   }
   else{
    return(
        <div>
           this is resource page 
        </div>
    )
   }
}