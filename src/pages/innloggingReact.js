const Innlogging = () => {
    return (
        <>
    <div className="pageContent">

    <div class="login">
        <div class="links">
            <a href="innlogging.html" method="post" class="active">Logg inn</a>
            <a href="register.html"> Registrer ny bruker </a>
        </div>
        <form action="{{ url_for(message) }}"method="post">
            <input type="text" name="username" id="username" placeholder="Brukernavn" reqired/>
            <input type="text" name="user_password" id="user_password" placeholder="Passord" required/>
            <div class="msg"></div>
            <input type="submit" value="Logg inn"/>
        </form>
    </div> 
    </> )
    };

    export default Innlogging;