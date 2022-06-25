import React from 'react'
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Module Imports

import Initiative from "./components/Initiative"
import Header from './components/homeComponents/Header';
import Home from './components/Home';
import About from "./components/About"
import Blogs from "./components/blogs"
import Connect from "./components/Connect"
import Team from "./components/team"
import Gallary from "./components/Gallary"
import Contact from "./components/Contact"
import Footer from './components/homeComponents/Footer';


function App() {
  return (
    <>

   <BrowserRouter>
   <Header></Header> 
  


        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/initiatives" element={<Initiative></Initiative>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/connect" element={<Connect></Connect>}></Route>
          <Route path="/team" element={<Team></Team>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>

          <Route path="/gallary" element={<Gallary></Gallary>}></Route>
        </Routes>

        <Footer></Footer>
   </BrowserRouter>
  </>
  );
}

export default App;
