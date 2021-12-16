import { Navbar } from "./components/Home/Navbar";
import { Cards } from "./components/Home/Cards";
import { Display } from "./components/Home/Display";
import { Carousel } from "./components/Home/Carousel";
import { Footer } from "./components/Home/Footer";

import { Mission } from "./components/About/Mission.jsx";
import { Vission } from "./components/About/Vission.jsx";

import { Service } from "./components/Services/Service.jsx"

import { Contact } from "./components/Contact-Us/Contact.jsx";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import "./App.css";


function App() {
  return (
    <div>
    




      {/* home    */}
      <Navbar />
      
      

      {/*About*/}

      {/*Services*/}

      {/*Contact-Us*/}



      <Routes>
       <Route path="/" element={<><Display /><Cards /><Carousel/></>}/>
       <Route path="/about" element={<><Mission/><Vission/></>}/>
      <Route path="/services" element={<><Service/></>}/>
      <Route path="/contact" element={<><Contact/></>}/>
      </Routes>

<Footer/>
    </div>
  );
}

export default App;
