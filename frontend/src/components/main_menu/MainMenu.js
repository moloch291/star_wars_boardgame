// React:
import React, {useEffect, useState} from "react";
// Style:
import '../../css/menu/forms.css';
import '../../css/loader.css';
import logo from "../../img/_swLogo2.png";
import Ships from "./Ships";
// Child components:
import StartButton from "./StartButton"
import MainButtons from "./MainButtons";
import AuthenticationForm from "./authentication_form/AuthenticationForm";
import Loader from "./Loader";
import SocialMediaButtons from "./SocialMediaButtons";


const MainMenu = () => {

    const [activeState, setActiveState] = useState("starting");
    const [initFormName, setInitFormName] = useState("");
    const [userData, setUserData] = useState(null);

/*####################################################################################################################*/

    const getUserData = (newUserData) => {
        setUserData(newUserData);
    }

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
                {activeState === "starting" && <StartButton setActiveState={setActiveState} hide={fadeOut} show={fadeIn}/>}
                {activeState === "mainButtons" && <MainButtons initFormState={setInitFormName}
                                                               setActiveState={setActiveState}
                                                               hide={fadeOut} show={fadeIn}/>}
                {activeState === "form" && <AuthenticationForm initForm={initFormName} setActiveState={setActiveState}
                                                               hide={fadeOut} show={fadeIn} getUserData={getUserData}/>}
                {activeState === "loading" && <Loader/>}
            </div>
            <Ships/>
            <SocialMediaButtons/>
        </div>
    );
}

export default MainMenu;