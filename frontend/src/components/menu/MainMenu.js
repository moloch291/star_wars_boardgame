import React, {useState} from "react";
// components:
import StartButton from "./StartButton"
import MainButtons from "./MainButtons";
import AuthenticationForm from "./AuthenticationForm";
import Loader from "./Loader";
import SocialMediaButtons from "./SocialMediaButtons";
import AudioHandler from "../audio/AudioHandler";
// Style:
import '../../css/menu/forms.css';
import '../../css/loader.css';
import logo from "../../img/_swLogo2.png";


const MainMenu = () => {
    const [startingState, setStartingState] = useState(true);
    const [buttonState, setButtonState] = useState(false);
    const [formState, setFormState] = useState(false);
    const [loadingState, setLoadingState] = useState(false);
    const [initFormName, setInitFormName] = useState("");

    /*######################################################################################################################
        States:
    ######################################################################################################################*/

    const enterButtonsState = async () => {
        await fadeOut();
        setTimeout(async () => {
            await setStartingState(false);
            await setButtonState(true);
            fadeIn();
        }, 500);
    };

    const enterFormState = async () => {
        await fadeOut();
        setTimeout(async () => {
            await setButtonState(false);
            await setFormState(true);
            fadeIn();
        }, 500);
    };

    const switchForms = async () => {
        await fadeOut();
        setTimeout(() => {
            fadeIn();
        }, 500);
    };

    const enterLoadingState = async () => {
        await fadeOut();
        setTimeout(async () => {
            await setFormState(false);
            await setLoadingState(true);
            fadeIn();
        }, 600);
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

//######################################################################################################################

    return (
        <div className="mainMenu">
            <img src={logo} className="mainMenuHeader" alt="logo"/>
            <div className="mainContainer">
                {startingState && <StartButton initAuth={enterButtonsState}/>}
                {buttonState && <MainButtons initFormState={setInitFormName} initForm={enterFormState}/>}
                {formState &&
                    <AuthenticationForm initForm={initFormName} switchForms={switchForms} loading={enterLoadingState}/>}
                {loadingState && <Loader/>}
            </div>
            <SocialMediaButtons/>
            <AudioHandler/>
        </div>
    );
}

export default MainMenu;