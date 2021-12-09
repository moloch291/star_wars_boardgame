import startButton from '../img/_jediButton.png';

function StartButton() {

    async function logIn() {
        // Variables:
        let startButton = document.querySelector("#StartButton")
        let formContainer = document.querySelector(".formContainer");
        const mainTheme = document.querySelector(".mainTheme");
        // Fade out main button and fade in login options:
        await startButton.classList.add("fadeOut");
        setTimeout(
            () => formContainer.removeAttribute("hidden"),
            1000
        );
        setTimeout(
            () => startButton.setAttribute("hidden", "true"),
            1000
        );
        formContainer.classList.add("fadeIn");
        // Play theme:
        mainTheme.play();
        mainTheme.loop = true;
    }

    return (
        <img src={startButton} id="StartButton" alt="Press to start!"
             onClick={
             () => {
                     logIn().then(() => {return null;});
                     document.querySelector(".R2D2-2").play()
                     const doorSound = document.querySelector(".DoorOpen");
                     doorSound.volume = 0.3;
                     doorSound.play();
                }
            }
     onMouseEnter={
         () => document.querySelector(".R2D2-1").play()
     }
     title="Click to start!"/>
    );
}

export default StartButton;