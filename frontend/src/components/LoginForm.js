function LoginForm() {

    async function fadeElement(elementClassName, mode, modeToRemove) {
        const elementToFade = document.querySelector(elementClassName);
        if (elementToFade.classList.contains(modeToRemove))
            await elementToFade.classList.remove(modeToRemove);
        await elementToFade.classList.add(mode);
        setTimeout(() => elementToFade.removeAttribute("hidden"), 1000);
    }

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

export default LoginForm;