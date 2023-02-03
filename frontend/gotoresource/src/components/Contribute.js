import axios from "axios"
import {useState} from "react"
export default function Contribute(){
    const [name , setName] = useState('')
    const [age , setAge] = useState('')
    function sendData(e){
         e.preventDefault(); 
         axios.post("http://localhost:5000/data" , {
            name : name,
            age : age
         }).then(res => console.log(res)).catch(err => console.log(err))
         setName('');
         setAge('');
    }
    return(
        <div>
           <form>
                 <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                 <input type="number" value={age} onChange={(e) => setAge(e.target.value)}></input>
                 <button onClick={sendData}> Submit </button>
           </form>
        </div>
    )
}