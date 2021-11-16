import logo from '../img/_swLogo2.png';
import startButton from '../img/_jediButton.png';
import '../css/mainPage.css';
import LogIn from "./LogIn";


function MainMenu() {

    function clickSocialMedia(url) {
        const doorSound = document.querySelector(".DoorOpen");
        doorSound.volume = 0.3;
        doorSound.pause();
        doorSound.currentTime = 0;
        doorSound.play();
        window.open(url);
    }

    async function logIn() {
        // Variables:
        let startButton = document.querySelector("#StartButton")
        let loginButtons = document.querySelector(".LogIn");
        const mainTheme = document.querySelector(".mainTheme");
        // Fade out main button and fade in login options:
        await startButton.classList.add("fadeOut");
        setTimeout(
            () => loginButtons.removeAttribute("hidden"),
            1000
        );
        await setTimeout(
            () => startButton.setAttribute("hidden", "true"),
            1000
        );
        loginButtons.classList.add("fadeIn");
        // Play theme:
        mainTheme.play();
        mainTheme.loop = true;
    }

    return (
        <div className="MainMenu">
            <header className="MainMenu-header">
                <img src={logo} className="menu-logo" alt="logo" />
            </header>
            <img src={startButton} id="StartButton" alt="Press to start!"
                 onClick={
                     () => {
                         logIn().then(() => {return null;});
                         document.querySelector(".R2D2-2").play()
                     }
                 }
                 onMouseEnter={
                     () => document.querySelector(".R2D2-1").play()
                 }/>
            <LogIn/>
            <ul>
                <li>
                    <i className="fab fa-facebook-f"
                       onClick={
                           () => clickSocialMedia(
                               "https://www.facebook.com/komjatidaniel"
                           )
                       }
                       onMouseEnter={
                           () => document.querySelector(".lightSaberSound1").play()
                       }>
                    </i>
                </li>
                <li>
                    <i className="fab fa-linkedin-in"
                       onClick={
                           () => clickSocialMedia(
                               "https://hu.linkedin.com/in/d%C3%A1niel-komj%C3%A1ti-6a6b3521a"
                           )
                       }
                       onMouseEnter={
                           () => document.querySelector(".lightSaberSound2").play()
                       }>
                    </i>
                </li>
                <li>
                    <i className="fab fa-github" aria-hidden={'true'}
                       onClick={
                           () => clickSocialMedia(
                               "https://github.com/moloch291/star_wars_boardgame"
                           )
                       }
                       onMouseEnter={
                           () => document.querySelector(".lightSaberSound3").play()
                       }>
                    </i>
                </li>
            </ul>
        </div>
    );
}

export default MainMenu;