import logo from '../img/_swLogo2.png';
import startButton from '../img/_jediButton.png';
import '../css/mainPage.css';
import LogIn from "./LogIn";


function MainMenu() {

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
        mainTheme.volume = 0.2;
        mainTheme.play();
        mainTheme.loop = true;
    }

    return (
        <div className="MainMenu">
            <header className="MainMenu-header">
                <img src={logo} className="menu-logo" alt="logo" />
            </header>
            <img src={startButton}
                 id="StartButton"
                 alt="Press to start!"
                 onClick={() => logIn()}/>
            <LogIn/>
            <ul>
                <li>
                    <i className="fab fa-facebook-f"
                       onClick={
                           () => window.open("https://www.facebook.com/komjatidaniel")
                       }
                       onMouseEnter={
                           () => document.querySelector(".lightSaberSound1").play()
                       }>
                    </i>
                </li>
                <li>
                    <i className="fab fa-linkedin-in"
                       onClick={
                           () => window.open("https://hu.linkedin.com/in/d%C3%A1niel-komj%C3%A1ti-6a6b3521a")
                       }
                       onMouseEnter={
                           () => document.querySelector(".lightSaberSound2").play()
                       }>
                    </i>
                </li>
                <li>
                    <i className="fab fa-github" aria-hidden={'true'}
                       onClick={
                           () => window.open("https://github.com/moloch291/star_wars_boardgame")
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