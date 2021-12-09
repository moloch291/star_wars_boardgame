import logo from '../img/_swLogo2.png';
import '../css/mainPage.css';
import FormContainer from "./FormContainer";
import StartButton from "./StartButton";
import SocialMediaButtons from "./SocialMediaButtons";
import MainButtons from "./MainButtons";


function MainMenu() {
    return (
        // Static elements:
        <div className="MainMenu">
            <header className="MainMenu-header">
                <img src={logo} className="menu-logo" alt="logo"/>
            </header>
            <StartButton/>
            <FormContainer/>
            <SocialMediaButtons/>
        </div>
    );
}

export default MainMenu;
