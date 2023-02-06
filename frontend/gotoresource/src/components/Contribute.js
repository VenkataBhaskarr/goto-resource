import axios from "axios"
import "../static/form.css"
import {useState} from "react"
export default function Contribute(){
    const [name , setName] = useState('')
    const [link , setLink] = useState('')
    const [password , setPassword] = useState('')
    function sendData(e){
         e.preventDefault(); 
         axios.post("http://localhost:5000/data" , {
            name : name,
            link : link
         }).then(res => console.log(res)).catch(err => console.log(err))
         setName('');
         setLink('');
         setPassword('');
    }
    return(
        <div className = "content">
             {/* <div className="main-block">
                 <h1>Got A Resource?</h1>
                 <form>
                 <hr></hr>
                 <div className="account-type">
         <input type="radio" value="none" id="radioOne" name="account" checked/>
          <label for="radioOne" className="radio">Videos</label>
          <input type="radio" value="none" id="radioTwo" name="account" />
          <label for="radioTwo" className="radio">Documentations</label>
                </div>
                <hr></hr>
        <label id="icon" for="name"><i className="fas fa-envelope"></i></label>
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Provide the Resource Link" required/>
        <label id="icon" for="name"><i className="fas fa-user"></i></label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Provide the Resource Name" required/>
        <label id="icon" for="name"><i className="fas fa-unlock-alt"></i></label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" Type Technical or NonTechnical" required/>
        <br></br>
        <br></br>
        <hr></hr>
        <hr></hr>
        <br></br>
        <div className="btn-block">
          <p>Please make sure the above added resource is reliable and you personally followed and benefitted from it</p>
          <button onClick={sendData} type="submit">Submit</button>
        </div>
      </form>
    </div> */}


      <div className="login-box">
            <h2>Submit a resource</h2>
            <form onSubmit={sendData} type="submit">
        <div className="user-box">
      <input type="text" name="" required="" value={name} onChange={(e) => setName(e.target.value)}></input>
      <label>Resource name</label>
    </div>
    <div className="user-box">
      <input type="text" name="" required="" value={link} onChange={(e) => setLink(e.target.value)}></input>
      <label>Link to the resource</label>
    </div>
     <button id="a">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
     </button>
   </form>
   </div>



    </div>

    )
}