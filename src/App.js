
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


function App() {
  const [detail,setDetail] = useState([]);

    useEffect(() => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setDetail(data));
    }, [])
  return (
    <div>
      <Header></Header>
     <Router>
       <Switch>
         <Route exact path="/">
          <Header></Header>
         </Route>
         <Route path="/about">
           <About></About>
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
         <Route path="/services">
          <Service></Service>
         </Route>
         <Route path="*">
          <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>
     <Home></Home>
     <Row xs={1} md={3} className="g-4">
  {
    detail.map(details => <Home detail={details}></Home>)
  }
</Row>


    </div>
  );
}

export default App;
