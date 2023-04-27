import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";

export default function Innlogging(){
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const HandleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const HandlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    async function registerRequest() {
        try {
          await fetch('http://stufprogrammering.no/login.php', {
            method: 'POST',
            body: JSON.stringify({
              username: username,
              password: password
            }),
          })
            .then((respose) => {
              if (respose.ok) {
                return respose.json()
              }
              throw new Error('error')
            })
            .then((data) => {
              if (data.status) {
                localStorage.setItem('token', data.status)
                navigate('/confirm')
              } else {
                alert("error!")
              }
            })
        } catch (error) {
          console.log(error.message)
        }
      }

      const SubmitHandler = (e) => {
        e.preventDefault();
        console.log({username},{password});
      }

    return (
        <>
        <div className="login">
            <div className="links">
                <Link method="post" className="links active">Logg inn</Link>
                <Link className="links"> Registrer ny bruker </Link>
            </div>
            <form onSubmit={SubmitHandler}>
                <input type="text" value={username} onChange={HandleUsernameChange} placeholder="Brukernavn" reqired/>
                <input type="text" value={password} onChange={HandlePasswordChange} placeholder="Passord" required/>
                <input type="submit" value="Logg inn"/>
            </form>
        </div> 
     </> );
    };

