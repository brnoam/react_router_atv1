import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { Cidade } from './Cidade';
import { Home } from './home';
import { Musica } from './Musica';

function App() {
  return (

    <BrowserRouter>
    <div className="App">

     
       
       <Switch>

        <Router path= "/Musica" exact component={Musica}/>
        <Router path="/Home" component={Home} />
        <Router path="/" component={Home} />
        <Router path="/cidade" component={Cidade} />
      
       </Switch>
      
      
      
      
      
      


      

  
     
    </div>
    </BrowserRouter>
  );
}

export default App;
