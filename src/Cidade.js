import React from 'react';
import { Link } from 'react-router-dom'


import newy from './img/newy.png';

export const Cidade = () =>{
     
    <div>
        
       <h1>Minha Cidade Favorita</h1>

     <img className="imagem" src={newy} />

     <Link to ="/home" className="">Ir para Home</Link>
         

    </div>

}