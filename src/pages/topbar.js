import {Link} from "react-router-dom";
import {CSSTransition} from 'react-transition-group';
import { useState,useEffect,useRef } from "react";
import cx from 'classnames';

export default function Topbar(){
	const [isOpen,setIsOpen] = useState(false);
	const sidebarRef = useRef(null);

	useEffect(() => {
		document.addEventListener('mousedown',handleClickOutside)
		return() => {
			document.removeEventListener('mousedown',handleClickOutside)
		};
	}, []);

	const handleClickOutside= (event) =>{
		if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
			setIsOpen(false);
		  }
	}

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
			<button className="menyIkon" onClick={() => setIsOpen(!isOpen)}><img src={require("../images/meny_ikon.png")}/></button>
		<div className= {cx("sidebar", {"sidebarClosed": !isOpen })} ref={sidebarRef}>
		
			<Link to="vaskeliste" className="links">Vaskeliste</Link>
			<Link to="vaskevalg" className="links" >Opprett ny vask</Link>
			<Link to="om oss" className="links">Om oss</Link>
			<Link to="innlogging" className="links">Logg inn</Link>
		</div>
	</header>
    </>
    )
};
/*<CSSTransition 
				in={isOpen}
				timeout={200}
				unmountOnExit
				classNames={"fade"}
				/> 
*/