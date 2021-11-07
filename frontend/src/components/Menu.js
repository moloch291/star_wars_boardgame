import logo from '../img/_swLogo2.png';
import startButton from '../img/_jediButton.png';
import '../css/mainPage.css';


function MainMenu() {
    function logIn() {
        console.log("This button will make login options visible!");
        return void (0);
    }

    return (
        <div className="MainMenu">
            <header className="MainMenu-header">
                <img src={logo} className="menu-logo" alt="logo" />
            </header>
            <img src={startButton}
                 alt="Press to start!"
                 onClick={() => logIn()}/>
            <ul>
                <li>
                    <i className="fab fa-facebook-f"
                       onClick={
                           () => window.open("https://www.facebook.com/komjatidaniel")
                       }>
                    </i>
                </li>
                <li>
                    <i className="fab fa-linkedin-in"
                       onClick={
                           () => window.open("https://hu.linkedin.com/in/d%C3%A1niel-komj%C3%A1ti-6a6b3521a")
                       }>
                    </i>
                </li>
                <li>
                    <i className="fab fa-github" aria-hidden={'true'}
                       onClick={
                           () => window.open("https://github.com/moloch291/star_wars_boardgame")
                       }>
                    </i>
                </li>
            </ul>
        </div>
    );
}

export default MainMenu;