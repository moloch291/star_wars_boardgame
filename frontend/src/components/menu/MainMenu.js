import {useState, useEffect, useRef} from "react";
// components:
import StartButton from "./StartButton"
import SocialMediaButtons from "./SocialMediaButtons";
import HeaderImage from "./HeaderImage.js";
import AudioHandler from "../audio/AudioHandler";
// Style:
import '../../css/menu/forms.css';
import MainButtons from "./MainButtons";
import LoginForm from "./LoginForm";

const MainMenu = () => {
    const [startButtonShown, setStartButtonShown] = useState(true);
    const [mainButtonsShown, setMainButtonsShown] = useState(false);
    const [formShown, setFormShown] = useState(false);
    const [initFormState, setInitFormState] = useState("");

    const setButtonsState = async () => {
        // Hiding StartButton:
        await fadeOutElement("#startButton", setStartButtonShown);
        setTimeout(() => fadeInElement(".formContainer", setMainButtonsShown), 500);
    };

    const fadeInElement = async (idOrClass, currentSetter) => {
        await currentSetter(true);
        setTimeout(() => document.querySelector(idOrClass).classList.remove("fadeIn"), 501);
    };

    const fadeOutElement = (idOrClass, currentSetter) => {
        document.querySelector(idOrClass).classList.add("fadeOut");
        setTimeout(() => {currentSetter(false);}, 500);
    }

    return (
        <div className="MainMenu">
            <HeaderImage/>
            <div className="mainContainer">
                 {startButtonShown && <StartButton initAuth={setButtonsState}/>}
                 {mainButtonsShown && <MainButtons initFormState={setInitFormState}/>}
            </div>
            <SocialMediaButtons/>
            <AudioHandler/>
        </div>
    );
}

export default MainMenu;