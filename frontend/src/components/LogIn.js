function LogIn() {

    function LoggingIn() {
        return (
            <div className="loginForm" hidden>
                <label htmlFor="user-email">Username:</label>
                <input type="email" id="user-email" name="user-email"/>
                <label htmlFor="user-password">Username:</label>
                <input type="password" id="user-password" name="user-password"/>
                <button id="subscribe">Log in!</button>
            </div>
        );
    }

    function Registration() {
        return (
            <div className="registrationForm" hidden>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"/>
                <label htmlFor="user-email">Username:</label>
                <input type="email" id="user-email" name="user-email"/>
                <label htmlFor="user-password">Username:</label>
                <input type="password" id="user-password" name="user-password"/>
                <label htmlFor="user-password-again">Username:</label>
                <input type="password" id="user-password-again" name="user-password-again"/>
                <button id="subscribe">Register!</button>
            </div>
        );
    }

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
            <button className="glow-on-hover" id="login"
                    onClick={
                        () => {
                            signIn();
                            document.querySelector(".xWingFire").play();
                        }
                    }
                    onMouseEnter={
                        () => document.querySelector(".xWingSound").play()
                    }>Log in!
            </button>
            <button className="glow-on-hover" id="registration"
                    onClick={
                        () => {
                            signUp();
                            document.querySelector(".TieFighterFire").play();
                        }
                    }
                    onMouseEnter={
                        () => document.querySelector(".TieFighterSound").play()
                    }>Registration!
            </button>
        </div>
    );
}

export default LogIn;
