import {Link} from "react-router-dom";
export default function Bottombar(){

    return (
        <>
            <div className="bottom"> 
                <div>
                    <p>Dues vei 9 <br/><br/> 4006 Stavanger</p>
                    <p to="mailto:post@stufskole.no">post@stufskole.no</p>
                    <p to="tel:+4793086277">930 86 277</p>
                </div>
                <div>
                    <p>Copyright &copy by Stuf Programmering</p>
                    <p>Følg oss på instagram:</p>
                    <Link to="https://www.instagram.com/stufskole/">
			        <img id="Instagram" src={require("../images/Instagram.jpg")} alt="StufInstagram"/> 
		            </Link> 
                </div>
            </div>
        </>
    )};