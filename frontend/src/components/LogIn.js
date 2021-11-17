function LogIn() {

    function LoggingIn() {
        return (
            <div className="loginForm" hidden>
                <label htmlFor="user-email">Email:</label>
                <input type="email" id="user-email" name="user-email" placeholder="Email"/>
                <label htmlFor="user-password">Password:</label>
                <input type="password" id="user-password" name="user-password" placeholder="Password"/>
                <button>Log in!</button>
                <p>New to the game?</p>
                <button onClick={
                    async () => {
                        await fadeElement(".loginForm", "fadeOut", "fadeIn");
                        await fadeElement(".registrationForm", "fadeIn", "fadeOut");
                        setTimeout(
                            () => document.querySelector(".registrationForm")
                                .removeAttribute("hidden"),
                            1000
                        );
                        setTimeout(
                            () => document.querySelector(".loginForm")
                                .setAttribute("hidden", "true"),
                            500
                        );
                    }
                }>Register!</button>
            </div>
        );
    }

    function Registration() {
        return (
            <div className="registrationForm" hidden>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"/>
                <label htmlFor="user-email">Email:</label>
                <input type="email" id="user-email" name="user-email"/>
                <label htmlFor="user-password">Password:</label>
                <input type="password" id="user-password" name="user-password"/>
                <label htmlFor="user-password-again">Password again:</label>
                <input type="password" id="user-password-again" name="user-password-again"/>
                <button id="subscribe">Register!</button>
                <p>Already have an account?</p>
                <button onClick={
                    async () => {
                        await fadeElement(".registrationForm", "fadeOut", "fadeIn");
                        await fadeElement(".loginForm", "fadeIn", "fadeOut");
                        setTimeout(
                            () => document.querySelector(".loginForm")
                                .removeAttribute("hidden"), 1000);
                    }
                }>Log in!</button>
            </div>
        );
    }

    async function fadeElement(elementClassName, mode, modeToRemove) {
        const elementToFade = document.querySelector(elementClassName);
        if (elementToFade.classList.contains(modeToRemove))
            await elementToFade.classList.remove(modeToRemove);
        elementToFade.classList.add(mode);
    }

    async function showLoginForm() {
        // Fade out main buttons:
        await fadeElement(".mainButtons", "fadeOut", "fadeIn");
        const loginForm = document.querySelector(".loginForm");
        setTimeout(() => loginForm.removeAttribute("hidden"), 1000);
        loginForm.classList.add("fadeIn");
        setTimeout(
            () => document.querySelector(".mainButtons").setAttribute("hidden", "true"),
            1000
        );
    }

    async function showRegistrationForm() {
        await fadeElement(".mainButtons", "fadeOut", "fadeIn");
        const registrationForm = document.querySelector(".registrationForm");
        setTimeout(() => registrationForm.removeAttribute("hidden"), 1000);
        registrationForm.classList.add("fadeIn");
        setTimeout(
            () => document.querySelector(".mainButtons").setAttribute("hidden", "true"),
            1000
        );
    }

    return (
        <div className="LogIn" hidden>
            <LoggingIn/>
            <Registration/>
            <div className="mainButtons">
                <button className="glow-on-hover" id="login"
                        onClick={
                            async () => {
                                await showLoginForm();
                                const xWingFire = document.querySelector(".xWingFire");
                                xWingFire.play();
                            }
                        }
                        onMouseEnter={
                            () => {
                                const xWingSound = document.querySelector(".xWingSound");
                                xWingSound.play();
                            }
                        }>Log in!
                </button>
                <button className="glow-on-hover" id="registration"
                        onClick={
                            async () => {
                                await showRegistrationForm();
                                const tieFighterFire = document.querySelector(".TieFighterFire");
                                tieFighterFire.play();
                            }
                        }
                        onMouseEnter={
                            () => {
                                const tieFighterSound = document.querySelector(".TieFighterSound");
                                tieFighterSound.play();
                            }
                        }>Registration!
                </button>
            </div>
        </div>
    );
}

export default LogIn;
