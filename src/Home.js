import React from 'react';
import { Link } from 'react-router-dom'



export const Home = () =>{
     
    return (

        <div  className="main">
              
              <nav className="nav">



                  <Link to="/Musica"  className="">Música</Link>
                  <Link to="/cidade"  className="">Cidade</Link>
              


              
              
              </nav>


              <h1>Minha Música Favorita</h1>

<iframe width="560" height="315" src="https://www.youtube.com/embed/1y6smkh6c-0?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<Link to ="" className="">Home</Link>





        </div>

    );

};