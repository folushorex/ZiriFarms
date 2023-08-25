import React from 'react';
import './App.css';
import Home from './pages/Home';
import Story from './pages/Story';
import Shop from './pages/Shop/Shop';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Hometwo from './components/Hometwo';
import ScrollToTop from 'react-scroll-to-top';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import { ShopContextProvider } from './Context/Shop-Context'


function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
      <Router>
       <Navbar/>
      <Routes>
      <Route  path="/" exact   element={<Home/>}/>
         <Route  path="/story" exact   element={<Story/>}/>
          <Route  path="/shop"  exact element={<Shop/>}/>
          <Route  path="/testimonials" exact element={<Testimonials/>}/>
          <Route  path="/contact" exact  element ={<Contact Us/>}/>
          <Route  path="/cart" exact  element ={<Cart/>}/>
          <Route  path="/hometwo" exact  element ={<Hometwo/>}/>
      </Routes>
    <Footer/>
      </Router>     
      </ShopContextProvider>
      {/* WhatsApp icon */}
     <a href="https://wa.me/2348023654347"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <ScrollToTop/>
    </div>
  )
}
export default App



