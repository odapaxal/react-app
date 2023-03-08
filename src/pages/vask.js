import {Datatest} from './datatest.js';

export default function Data(){
    return (
        <div className="vask">
            <div className="tabell">
                {Datatest.map((data,key) => {
                    return(
                        <div key={key}> 
                        <Vask 
                            key={key}
                            name={data.name}
                            bestillingtid={data.bestillingtid}
                            typeVask = {data.typeVask}
                        />
                        </div>
                    );
                })}
                </div>
            <div className="vaskeInfo">
                    <p className="hva" id="hva">Hvitt 60&#8451</p>
                    <p className="når">Onsdag 1. februar 16.30</p>
                    <p className="hvem">Oda</p>
                </div>
            <button className="button" onclick="">Meld deg på</button>
	    </div>
    );
}

function Vask({name,bestillingtid,typeVask}) {
    if(!name) return <div />;
    return (
			<div className="hvanårhvem">
				<p>{typeVask}</p>
				<p>{bestillingtid}</p>
				<p>{name}</p>
			</div>
    );
}