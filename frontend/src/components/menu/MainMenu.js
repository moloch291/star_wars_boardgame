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
import AuthenticationForm from "./AuthenticationForm";

const MainMenu = () => {
    const [startButtonShown, setStartButtonShown] = useState(false);
    const [mainButtonsShown, setMainButtonsShown] = useState(false);
    const [formShown, setFormShown] = useState(true);
    const [initFormState, setInitFormState] = useState("");

/*######################################################################################################################
    State setters::
######################################################################################################################*/

    const setButtonsState = async () => {
        // Hiding StartButton:
        await fadeOutElement("#startButton", setStartButtonShown);
        setTimeout(
            () => fadeInElement(".formContainer", setMainButtonsShown),
            500
        );
    };

/*######################################################################################################################
    Faders:
######################################################################################################################*/

    const fadeInElement = async (idOrClass, currentSetter) => {
        await currentSetter(true);
        setTimeout(
            () => document.querySelector(idOrClass).classList.remove("fadeIn"),
            501
        );
    };

    const fadeOutElement = async (idOrClass, currentSetter) => {
        const currentChild = document.querySelector(idOrClass);
        if (currentChild.classList.contains("fadeIn"))
            await currentChild.classList.remove("fadeIn");
        currentChild.classList.add("fadeOut");
        setTimeout(() => {currentSetter(false);}, 500);
    };

    return (
        <div className="MainMenu">
            <HeaderImage/>
            <div className="mainContainer">
                {startButtonShown && <StartButton initAuth={setButtonsState}/>}
                {mainButtonsShown && <MainButtons initFormState={setInitFormState}/>}
                {formShown && <AuthenticationForm initForm ={initFormState}/>}
            </div>
            <SocialMediaButtons/>
            <AudioHandler/>
        </div>
    );
}

export default MainMenu;