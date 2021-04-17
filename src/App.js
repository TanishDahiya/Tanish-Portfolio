import React from 'react';
import './App.css';
import Home from "./Home"

import {Switch,Route} from "react-router-dom"

import Blog from './Blog';
import AboutUs from './AboutUs';
import Project from './Project';

import Navbar from "./Navbar";
import NewNav from './NewNav';



function App() {
  return (
    <>
    <div className="app">
      <div className="app_header">
       <Navbar/>
       {/* <NewNav/>*/}
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
     
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/portfolio">
          <AboutUs />
        </Route>
        <Route exact path="/project">
          <Project />
        </Route>
      </Switch>
     {/* <Footer />*/}
 
		
						
    </div>
    </>
  );
}

export default App;
