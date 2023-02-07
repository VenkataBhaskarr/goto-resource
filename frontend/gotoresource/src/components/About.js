import axios from "axios"
import MediaCard from "./MediaCard"
import Contribute from "./Contribute"
import { Grid } from '@mui/material';
import { useState, useEffect } from "react";
import "../static/about.css";
export default function About(){
    const [data, setData] = useState(null);
     useEffect(() => {
      axios
        .get('http://localhost:5000/data')
        .then((res) => {
          setData(res.data)
        }).catch(err => console.log(err)) 
     },);
   if(data){
    return(
        // <div className="grid-box">
        //    {
        //        data.map((element)=><MediaCard name={element.name} age={element.age}/>)
        //    }
        // </div>

          <Grid className ="grid" container spacing={5}>
              {data.map((element) => (
               <Grid item xs={12} sm={4} md={4} >
                  <MediaCard name={element.name} age={element.age} link={element.link}/>
               </Grid>
             ))}
         </Grid>
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