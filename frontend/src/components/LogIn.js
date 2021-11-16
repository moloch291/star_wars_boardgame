function LogIn() {

    function signIn() {
        return void (0);
    }

    function signUp() {
        return void (0);
    }

    return (
        <div className="LogIn" hidden>
            <LoggingIn/>
            <Registration/>
            <button className="glow-on-hover"
                    id="login"
                    onClick={
                        () => signIn()
                    }
                    onMouseEnter={
                        () => document.querySelector(".xWingSound").play()
                    }>Log in!
            </button>
            <button className="glow-on-hover"
                    id="registration"
                    onClick={
                        () => signUp()
                    }
                    onMouseEnter={
                        () => document.querySelector(".TieFighterSound").play()
                    }>Registration!
            </button>
        </div>
    );
}

export default LogIn;

function LoggingIn() {
    return (
        // ToDo: implement login function
        <div className="loginForm" hidden/>
    );
}

function Registration() {
    return (
        // ToDo: implement register function
        <div className="registrationForm" hidden/>
    );
}