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
import Ships from "./Ships";


const MainMenu = () => {
    const [startingState, setStartingState] = useState(true);
    const [buttonState, setButtonState] = useState(false);
    const [formState, setFormState] = useState(false);
    const [loadingState, setLoadingState] = useState(false);
    const [initFormName, setInitFormName] = useState("");

    /*######################################################################################################################
        States:
    ######################################################################################################################*/

    const enterButtonsState = () => {
        fadeOut();
        setTimeout(() => {
            setStartingState(false);
            setButtonState(true);
            fadeIn();
        }, 500);
    };

    const enterFormState = () => {
        fadeOut();
        setTimeout(() => {
            setButtonState(false);
            setFormState(true);
        }, 500);
        setTimeout(() => {
            fadeIn();
        }, 600);
    };

    const switchForms = () => {
        fadeOut();
        setTimeout(() => {
            fadeIn();
        }, 500);
    };

    const enterLoadingState = () => {
        fadeOut();
        setTimeout(() => {
            setFormState(false);
            setLoadingState(true);
            fadeIn();
        }, 700);
    };

    /*######################################################################################################################
        Faders:
    ######################################################################################################################*/

    const fadeOut = () => {
        document.querySelector(".mainContainer").classList.add("fadeOut");
    };

    const fadeIn = () => {
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
            <Ships/>
            <SocialMediaButtons/>
        </div>
    );
}

export default MainMenu;