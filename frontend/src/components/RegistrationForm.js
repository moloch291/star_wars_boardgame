function RegistrationForm() {

    async function fadeElement(elementClassName, mode, modeToRemove) {
        const elementToFade = document.querySelector(elementClassName);
        if (elementToFade.classList.contains(modeToRemove))
            await elementToFade.classList.remove(modeToRemove);
        await elementToFade.classList.add(mode);
        setTimeout(() => elementToFade.removeAttribute("hidden"), 1000);
    }

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

export default RegistrationForm;