function LoginAndRegister() {
    // FUNCTION(S) CALLED BY COMPONENTS:
    // Fade in or out elements in component:
    async function fadeElement(elementClassName, mode, modeToRemove) {
        const elementToFade = document.querySelector(elementClassName);
        if (elementToFade.classList.contains(modeToRemove))
            await elementToFade.classList.remove(modeToRemove);
        await elementToFade.classList.add(mode);
        setTimeout(() => elementToFade.removeAttribute("hidden"), 1000);
    }
    // Login form component:
    function LoginForm() {
        return (
            <div className="loginForm" hidden>
                <form>
                    <h3>Login</h3>
                    <label htmlFor="user-email">Email:</label>
                    <input type="email" id="user-email" name="user-email" placeholder="Email"/>
                    <label htmlFor="user-password">Password:</label>
                    <input type="password" id="user-password" name="user-password" placeholder="Password"/>
                    <button className="formButton" onClick={
                        (e) => e.preventDefault()
                    }>Log in!</button>
                    <p>New to the game?</p>
                    <button className="formButton" onClick={
                        async (e) => {
                            e.preventDefault();
                            await fadeElement(
                                ".loginForm", "fadeOut", "fadeIn"
                            );
                            await fadeElement(
                                ".registrationForm", "fadeIn", "fadeOut"
                            );
                            setTimeout(
                                () => document.querySelector(
                                    ".loginForm"
                                ).setAttribute("hidden", "true"),
                                1000
                            );
                        }
                    }>Register!</button>
                </form>
            </div>
        );
    }
    // Registration form component:
    function RegistrationForm() {
        return (
            <div className="registrationForm" hidden>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username"/>
                    <label htmlFor="user-email">Email:</label>
                    <input type="email" id="user-email" name="user-email"/>
                    <label htmlFor="user-password">Password:</label>
                    <input type="password" id="user-password" name="user-password"/>
                    <label htmlFor="user-password-again">Password again:</label>
                    <input type="password" id="user-password-again" name="user-password-again"/>
                    <button className="formButton" onClick={
                        (e) => e.preventDefault()
                    }>Register!</button>
                    <p>Already have an account?</p>
                    <button className="formButton" onClick={
                        async (e) => {
                            e.preventDefault();
                            await fadeElement(
                                ".registrationForm", "fadeOut", "fadeIn"
                            );
                            await fadeElement(
                                ".loginForm", "fadeIn", "fadeOut"
                            );
                            setTimeout(
                                () => document.querySelector(".registrationForm")
                                    .setAttribute("hidden", "true"),
                                1000
                            );
                        }
                    }>Log in!</button>
                </form>
            </div>
        );
    }
    // Nav buttons to the forms above (forms are originally hidden):
    return (
        <div className="LogIn" hidden>
            <LoginForm/>
            <RegistrationForm/>
            <div className="mainButtons">
                <button className="glow-on-hover" id="login"
                        onClick={
                            async () => {
                                const xWingFire = document.querySelector(".xWingFire");
                                xWingFire.play();
                                await fadeElement(
                                    ".mainButtons", "fadeOut", "fadeIn"
                                );
                                await fadeElement(
                                    ".loginForm", "fadeIn", "fadeOut"
                                );
                                setTimeout(
                                    () => document.querySelector(".mainButtons")
                                        .setAttribute("hidden", "true"),
                                    1000
                                );
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
                                const tieFighterFire = document.querySelector(".TieFighterFire");
                                tieFighterFire.play();
                                await fadeElement(
                                    ".mainButtons", "fadeOut", "fadeIn"
                                );
                                await fadeElement(
                                    ".registrationForm", "fadeIn", "fadeOut"
                                );
                                setTimeout(
                                    () => document.querySelector(".mainButtons")
                                        .setAttribute("hidden", "true"),
                                    1000
                                );
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

export default LoginAndRegister;
