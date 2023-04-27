import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <p> 
                Her på Stuf skal vi spare strøm, vann og tid! Skriv når og hva du ønsker å vaske, 
                eller meld deg på noen andre sin klesvask. Jo færre maskiner som kjøres, jo bedre!<br/><br/>
                Klikk på vaskemaskinen for å gå videre: 
            </p>
            <Link to="vaskeliste">
                <img className="machine" src={require("../images/waschma.jpg")} alt="vaskemaskin"/>
            </Link>
            <button type="button">Spill hangman</button>
        </>
    );
}