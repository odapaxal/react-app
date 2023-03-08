
export default function Topbar(){

    return (
        <>
        <header className="Topbar">
		<p> 
			<img className="StufLogo" src={require("../images/stuflogo.jpg")} alt="StufLogo"/> 
		</p>   
		<nav>
			<p to="/">Vaskeliste</p>
			<p>Spill hangman</p>
			<p>Om oss</p>
			<p>Logg inn</p>
		</nav>
			<input type="checkbox" id="checkboxToggle"/>
			<label htmlFor="checkboxToggle" className="menyIkon"><img src={require("../images/meny_ikon.png")}/></label>
		<div className="sidebar">
			<input type="checkbox" id="checkboxToggle"/>
			<label htmlFor="checkboxToggle" className="exit">&#x2715</label>
			<p to="/">Vaskeliste</p>
			<p>Spill hangman</p>
			<p>Om oss</p>
			<p>Logg inn</p>
		</div>
	</header>
    </>
    )
};