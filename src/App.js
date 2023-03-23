import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import Contact from './Components/Contact';
import Home from "./Components/Home";
import Loginpage from './Components/Loginpage';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import User from './Components/User';
import Product_details from './Components/Product_details';


export default function App() {

  const [showbar, setshowbar] = useState(false);
  return (
    <div className="App">
      {
        showbar ? <Navbar setshowbar={setshowbar}/> : null
      } 
      <Routes>
        <Route path="/" element={<Loginpage setshowbar={setshowbar} />}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/User" element={<User/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/" element={<Loginpage/>}/>
        <Route path="/Product_details/:id/:category" element={<Product_details/>}/>
         
        </Routes>
      {/* <Loginpage /> */}
    </div>
  );
}
