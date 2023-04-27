import {Datatest} from './datatest.js';
import {Link} from 'react-router-dom';

export default function Vaskeliste(){
    
    return (
        <>
        <h1>Vaskeliste</h1>
            {Datatest.map((data) => {
                return(
                    <div className='vaskOgKnapp'>
                        <div className="tabell">
                        <div className="hvanårhvem">
                        <p className="hva" id="hva">Hva</p>
                        <p className="når">Når</p>
                        <p className="hvem">Hvem</p>
                    </div>
                        <Vask 
                            key={data.id}
                            name={data.name}
                            bestillingtid={data.bestillingtid}
                            typeVask = {data.typeVask}
                        />
                        </div>
                    <button className="button">Meld deg på</button>
                    </div>
                );
            })}
            <h1>Fant du ingen vask som passet?</h1>
            <Link to="/vaskevalg">
	        <button className="bigButton links">Opprett ny vask</button>
            </Link>
        </>
    );}

function Vask({name,bestillingtid,typeVask}) {
    if(!name) return <div />;
    return (
			<div className="vaskeInfo">
				<p>{typeVask}</p>
				<p>{bestillingtid}</p>
				<p>{name}</p>
			</div>
    );
}