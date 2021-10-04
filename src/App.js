
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import About from './components/Header/About/About';
import Test from './components/Header/Test/Test';
import Organisation from './components/Header/Organisation/Organisation';
import Researcher from './components/Header/Researcher/Researcher';
import Service from './components/Header/Service/Service';
import NotFound from './components/Header/NotFound/NotFound';
import Home from './components/Header/Home/Home';
import React, { useEffect, useState } from 'react';
import Homes from './components/Header/Homes/Homes';
import Services from './components/Header/Services/Services';
import Footer from './components/Header/Footer/Footer';


function App() {
 
  return (
    <div>
      
     <Router>
     <Header></Header>
       <Switch>
         <Route exact path="/">
          <Home></Home>
         </Route>
         <Route exact path="/home">
          <Home></Home>
         </Route>
         <Route path="/about">
           <About></About>
         </Route>
         <Route path="/services">
           <Services></Services>
         </Route>
         <Route path="/test">
          <Test></Test>
         </Route>
         <Route path="/organisations">
          <Organisation></Organisation>
         </Route>
         <Route path="/researchers">
          <Researcher></Researcher>
         </Route>
         <Route path="*">
          <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
