import {Link} from "react-router-dom";
import { useState } from "react";

export default function Vaskevalg() {
    const [typeVask,setTypeVask] = useState("");
    
    const HandleTypevaskChange = (e) => {
        setTypeVask(e.target.value);
        console.log('clicked  ==>', typeVask)
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

                <button>Tilpass</button>
            </div>
            <div className="navigate">
                <button className="tilbake"><Link to="/vaskeliste">Tilbake</Link></button>
                <button className="ferdig"><Link to="/tidvalg">Ferdig</Link></button>
            </div>
        </>
    )
}

const RadioButton = ({typeVask,onChange}) =>{
    return (
        <label className="valg">
            <input type="radio" id={typeVask}  value={typeVask} onChange={onChange} />
            {typeVask}
        </label>
    )
}