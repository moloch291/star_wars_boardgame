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
            <button className="glow-on-hover" id="login" onClick={() => signIn()}>Log in!</button>
            <button className="glow-on-hover" id="registration" onClick={() => signUp()}>Registration!</button>
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