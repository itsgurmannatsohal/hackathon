// import { useState } from 'react'
import "./styles/App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Verify from "./Verify";
import OrgLogin  from "./OrgLogin";
import View from "./View";
import Done from "./Done";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div className="app">
      <Header></Header>
      <div className="content">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home></Home>}>
          
        </Route>
        <Route exact path="/verify" element={<Verify></Verify>}>
          
        </Route>
        <Route exact path="/org" element={<OrgLogin></OrgLogin>}>
          
        </Route>
        <Route exact path="/view" element={<View></View>}></Route>
        <Route exact path="/done" element={<Done></Done>}></Route>

        </Routes>
      </Router>
      
      </div>
      <Footer></Footer>  
    </div>
  );
}

export default App;