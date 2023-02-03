import axios from "axios"
import "../static/form.css"
import {useState} from "react"
export default function Contribute(){
    const [name , setName] = useState('')
    const [mail , setMail] = useState('')
    const [password , setPassword] = useState('')
    function sendData(e){
         e.preventDefault(); 
         axios.post("http://localhost:5000/data" , {
            name : name,
            mail : mail
         }).then(res => console.log(res)).catch(err => console.log(err))
         setName('');
         setMail('');
         setPassword('');
    }
    return(
        <div>
             <div class="main-block">
                 <h1>Resource?</h1>
                 <form>
                 <hr></hr>
                 <div class="account-type">
         <input type="radio" value="none" id="radioOne" name="account" checked/>
          <label for="radioOne" class="radio">Videos</label>
          <input type="radio" value="none" id="radioTwo" name="account" />
          <label for="radioTwo" class="radio">Documentations</label>
                </div>
                <hr></hr>
        <label id="icon" for="name"><i class="fas fa-envelope"></i></label>
        <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} placeholder="Email" required/>
        <label id="icon" for="name"><i class="fas fa-user"></i></label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required/>
        <label id="icon" for="name"><i class="fas fa-unlock-alt"></i></label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <div class="btn-block">
          <p>Please make sure the above added resource is reliable and you personally followed it</p>
          <button onClick={sendData} type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>






























           /* <form className="form">
               
             
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                
                 
                   <input type="number" value={age} onChange={(e) => setAge(e.target.value)}></input>
               
               
                   <button onClick={sendData}> Submit </button>

           </form> */
    )
}