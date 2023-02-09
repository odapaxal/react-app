import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//class
class hva {
  constructor(vask){
    this.vask=vask;
  }
  nyVask(){
    return this.vask;
  }
}

// map
let array = ['farget 60','farget 40','hvitt 60']
let show = array.map((vask)=> <button>{vask}</button>)

//destructuring
let vask=['farget 60','onsdag 15.30','Oda'];
const[vasketype,når,navn] = vask;

//Ternary if/else statement
    //authenticated ? renderApp() : renderLogin();

// JSX
const element = (
  <>                                
  <p class='hva'> {vask[0]}</p>
  <p class='når'>{vask[1]}</p>
  </>
  ) ;//variabler eller expressions skrives i curly brackets


// render index.html
const container = document.getElementById('test');
const root = ReactDOM.createRoot(container);
root.render(Onsdag);

