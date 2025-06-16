import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Moviedetail from "./pages/Moviedetail";
import { Route,Routes } from "react-router";
import Trailer from "./pages/Trailer";


function App() {
  return (
    <div>
      <div className="sticky top-0 z-10">
      <Nav ></Nav>
      </div>
      <div>
    <Routes>
      <Route path="/" element = { <Home></Home> } />
      <Route path="/Search" element = { <Search></Search> } />
      <Route path="/MovieDetail/:id" element = { <Moviedetail></Moviedetail> } />
      <Route path="/Trailer/:id" element = {<Trailer></Trailer>}/>
    </Routes>
      </div>
      
      
    </div>
  );
}

export default App;
