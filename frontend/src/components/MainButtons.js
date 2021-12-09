function MainButtons() {

    async function fadeElement(elementClassName, mode, modeToRemove) {
        const elementToFade = document.querySelector(elementClassName);
        if (elementToFade.classList.contains(modeToRemove))
            await elementToFade.classList.remove(modeToRemove);
        await elementToFade.classList.add(mode);
        setTimeout(() => elementToFade.removeAttribute("hidden"), 1000);
    }

    return (
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
    );
}

export default MainButtons;