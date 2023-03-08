import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

let loggedin = true;
//class
class hva {
  constructor(vask){
    this.vask=vask;
  }
  nyVask(){
    return this.vask;
  }
}

// map (vise arrayer)
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

  // Components 
  class Hva extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        vasketype:"Farget 60",
        hvem: "Oda",
        når:"onsdag"
      };
    }
    //static getDerivedStateFromProps(props,state){ // static viser til tilleggsinfo i render
    //  return {hvem:props.leggTil} }
    meldDegPå = () =>{
      if(window.confirm("Vil du melde deg på?")==true){
      this.setState({hvem:"Oda, Selma"});
      //vis avmeldingsknapp
      }
    }
    render(){
      return (
      <div class="Hva">
				<p class="hva">{this.state.vasketype}</p>
				<p class="når">{this.state.når}</p>
				<p class="hvem">{this.state.hvem}</p>
        <button type="button" onClick={this.meldDegPå}>Meld deg på</button> 
			</div>);
    } // funksjoner kalles med {} og ikke "funksjon()" med parameter: {=()=> funksjon(parameter)}
  }
  // eller 
  function Hvem(){
    return (
    <>
    <p>{vask[0]}</p>
    <Hva />
    </>);
  }
  export default Hvem ;

  // if statement i funksjon
  function innlogget(props){
    const login = props.login;
    if(login){
      return <button class="button">Meld deg av</button>
    }else{
      return <button class="button">Meld deg på</button>
    } // evt redirect til login-side
  }

  //Forms i react 
  function Innlogging(){
    const [input,setInput] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInput(values => ({...values,[name]:value}))
    }

    const handleSubmit = (event) => { //her skal koden om submit
      event.preventDefault();
      console.log(input);
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Velg navn: 
          <input type="text" name="username" value={input.username || ""}
          onChange={handleChange} />
        </label>
        <label>
          Velg passord: 
          <input type="text" name="passord" value={input.passord || ""}
          onChange={handleChange} />
        </label>
        <input type="submit"/>
      </form>
    )
  }

// Hooks 

// UseState hook
function UseState(){
  const [color,setColor] = UseState("blå"); // color er current state og setColor er funksjonen for å oppdatere den 
}

//Read


// render index.html
const container = document.getElementById('test');
const root = ReactDOM.createRoot(container);
root.render(); // hvis funksjonen brukes : root.render(<Hvem />)

