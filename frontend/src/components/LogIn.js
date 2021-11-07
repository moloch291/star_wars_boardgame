function LogIn() {
    function signIn() {
        return void (0);
    }

    function signUp() {
        return void (0);
    }

    return (
        <div className="LogIn" hidden={true}>
            <LoggingIn/>
            <Registration/>
            <button onClick={() => signIn()}>Log in!</button>
            <button onClick={() => signUp()}>Registration!</button>
        </div>
    );
}

export default LogIn;

function LoggingIn() {
    return (
        // ToDo: implement login function
        <div className="loginForm" hidden={true}/>
    );
}

function Registration() {
    return (
        // ToDo: implement register function
        <div className="registrationForm" hidden={true}/>
    );
}