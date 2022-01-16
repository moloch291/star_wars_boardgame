import {useState} from "react";
// components:
import StartButton from "./StartButton"
import SocialMediaButtons from "./SocialMediaButtons";
import HeaderImage from "./HeaderImage.js";
import AudioHandler from "../audio/AudioHandler";
// Style:
import '../../css/menu/forms.css';
import MainButtons from "./MainButtons";
import AuthenticationForm from "./AuthenticationForm";

const MainMenu = () => {
    const [startButtonShown, setStartButtonShown] = useState(true);
    const [mainButtonsShown, setMainButtonsShown] = useState(false);
    const [formShown, setFormShown] = useState(false);
    const [initFormState, setInitFormState] = useState("");

/*######################################################################################################################
    State setters::
######################################################################################################################*/

    const setButtonsState = async () => {
        await fadeOut();
        setTimeout(() => {
            setStartButtonShown(false);
            setMainButtonsShown(true);
            fadeIn();
        }, 500);
    };

    const setFormState = async () => {
        await fadeOut();
        setTimeout(() => {
            setMainButtonsShown(false);
            setFormShown(true);
            fadeIn();
        }, 500);
    };

    const switchForms = async () => {
        await fadeOut();
        setTimeout(() => {
            fadeIn();
        }, 500);
    };

/*######################################################################################################################
    Faders:
######################################################################################################################*/

    const fadeOut = () => {
        document.querySelector(".mainContainer").classList.add("fadeOut");
    };

    const fadeIn = async () => {
        const mainContainer = document.querySelector(".mainContainer");
        mainContainer.classList.remove("fadeOut");
        mainContainer.classList.add("fadeIn");
        setTimeout(() => {
            mainContainer.classList.remove("fadeIn");
        }, 500);
    };

    return (
        <div className="mainMenu">
            <HeaderImage/>
            <div className="mainContainer">
                {startButtonShown && <StartButton initAuth={setButtonsState}/>}
                {mainButtonsShown && <MainButtons initFormState={setInitFormState}
                                                  initForm={setFormState}/>}
                {formShown && <AuthenticationForm initForm ={initFormState}
                                                  switchForms={switchForms}/>}
            </div>
            <SocialMediaButtons/>
            <AudioHandler/>
        </div>
    );
}

export default MainMenu;