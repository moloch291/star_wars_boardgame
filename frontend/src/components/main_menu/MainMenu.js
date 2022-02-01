import React, {useState} from "react";
// components:
import StartButton from "./StartButton"
import MainButtons from "./MainButtons";
import AuthenticationForm from "./authentication_form/AuthenticationForm";
import Loader from "./Loader";
import SocialMediaButtons from "./SocialMediaButtons";
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

    const enterButtonsState = async () => {
        await fadeOut();
        setStartingState(false);
        setButtonState(true);
        fadeIn();
    };

    const enterFormState = async () => {
        await fadeOut();
        setButtonState(false);
        setFormState(true);
        fadeIn();
    };

    const justFade = async () => {
        await fadeOut();
        fadeIn();
    };

    const enterLoadingState = async () => {
        await fadeOut();
        setFormState(false);
        setLoadingState(true);
        fadeIn();
    };

/*######################################################################################################################
    Faders:
######################################################################################################################*/

    const fadeOut = () =>
        new Promise((resolve) => {
            const mainContainer = document.querySelector(".mainContainer");
            mainContainer.classList.add("fadeOut");

            const cleanUp = () => {
                mainContainer.removeEventListener("animationend", cleanUp);
                mainContainer.classList.remove("fadeOut");
                resolve();
            };

            mainContainer.addEventListener("animationend", cleanUp);
        });

    const fadeIn = () =>
        new Promise((resolve) => {
            const mainContainer = document.querySelector(".mainContainer");
            mainContainer.classList.add("fadeIn");

            const cleanUp = () => {
                mainContainer.removeEventListener("animationend", cleanUp);
                mainContainer.classList.remove("fadeIn");
                resolve();
            };

            mainContainer.addEventListener("animationend", cleanUp);
        });

//######################################################################################################################

    return (
        <div className="mainMenu">
            <img src={logo} className="mainMenuHeader" alt="logo"/>
            <div className="mainContainer">
                {startingState && <StartButton initAuth={enterButtonsState}/>}
                {buttonState && <MainButtons initFormState={setInitFormName} initForm={enterFormState}/>}
                {formState &&
                    <AuthenticationForm initForm={initFormName} loading={enterLoadingState}/>}
                {loadingState && <Loader/>}
            </div>
            <Ships/>
            <SocialMediaButtons/>
        </div>
    );
}

export default MainMenu;