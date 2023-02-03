import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Contribute from './components/Contribute';
import About from './components/About';
import {Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import EndCredits from "./components/EndCredits"

function App() {
  return (
    <div className="App">
       <ResponsiveAppBar />
       <br></br>
       <br></br>
       <Routes>
         <Route exact path="/" element = {<Home />}> </Route>
         <Route exact path = "/About.js" element={<About />}> </Route>
         <Route exact path = "/Contribute.js" element={<Contribute />}> </Route>
       </Routes>
    </div>
  );
}

export default App;