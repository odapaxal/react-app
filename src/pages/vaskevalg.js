import {Link} from "react-router-dom";
import { useState } from "react";

export default function Vaskevalg({typeVask,setTypeVask}) {
    
    const HandleTypevaskChange = (e) => {
        setTypeVask(e.target.value);
        console.log('clicked  ==>', typeVask)
      }

    const HandleSubmit = () => {
        console.log("Du har valgt:",typeVask)

    }

    return(
        <>
            <h1>Hva vil du vaske?</h1>

            <div className="vaskevalg">
            
                <RadioButton
                    typeVask="Hvitt 40°"
                    onChange={HandleTypevaskChange}
                />
                <RadioButton
                    typeVask="Hvitt 60°"
                    onChange={HandleTypevaskChange}
                />
                <RadioButton
                    typeVask="Farget 40°"
                    onChange={HandleTypevaskChange}
                />
                <RadioButton
                    typeVask="Farget 60°"
                    onChange={HandleTypevaskChange}
                />
                <RadioButton
                    typeVask="Ull/Silke 30°"
                    onChange={HandleTypevaskChange}
                />
            </div>
            <div className="navigate">
                <button className="tilbake button"><Link to="/vaskeliste" >Tilbake</Link></button>
                <button className="ferdig button"><Link to="/tidvalg" onClick={HandleSubmit}>Ferdig</Link></button>
            </div>
        </>
    )
}

const RadioButton = ({typeVask,onChange}) =>{
    return (
        <>
        <input type="radio" className="valgInput"id={typeVask}  value={typeVask} onChange={onChange} name="Vaskevalg" />
        <label className="valg" htmlFor={typeVask}>{typeVask}</label>
        </>
    )
}