import {Link} from "react-router-dom";

export default function Topbar(){

    return (
        <>
        <header className="Topbar">
		<Link to="/"> 
			<img className="StufLogo" src={require("../images/stuflogo.jpg")} alt="StufLogo"/> 
		</Link>   
		<nav>
			<Link className="links" to="vaskeliste">Vaskeliste</Link>
			<Link className="links" to="vaskevalg">Opprett ny vask</Link>
			<Link className="links" to="om oss">Om oss</Link>
			<Link className="links" to="innlogging">Logg inn</Link>
		</nav>
			<input type="checkbox" id="checkboxToggle"/>
			<label htmlFor="checkboxToggle" className="menyIkon"><img src={require("../images/meny_ikon.png")}/></label>
		<div className="sidebar">
			<input type="checkbox" id="checkboxToggle"/>
			<label htmlFor="checkboxToggle" className="exit">X</label>
			<Link to="vaskeliste" className="links">Vaskeliste</Link>
			<Link className="links" to="vaskevalg">Opprett ny vask</Link>
			<Link to="om oss" className="links">Om oss</Link>
			<Link to="innlogging" className="links">Logg inn</Link>
		</div>
	</header>
    </>
    )
};