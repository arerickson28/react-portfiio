// import logo from './logo.svg';
import './App.css';
import React from "react";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav"
import Foot from "./components/Foot/Foot"

function App() {
  return (
    
    <>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌻</text></svg>"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <Banner />
      <Nav />
      <Foot />
    </>
  )

}

export default App;
