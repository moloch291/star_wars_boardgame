// React:
import {useState} from "react";
// Styling:
import {doorSound} from "../../audio/AudioPlayer";
// Child components:
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";


const AuthenticationForm = ({initForm, setActiveForm, hide, show, getUserData}) => {
    const [activeState, setActiveState] = useState(initForm);

    const switchingState = async () => {
        doorSound();
        await hide();
        setActiveState(activeState === "login" ? "registration" : "login");
        show();
    };

    if (activeState === "login")
        return (<LoginForm setActiveForm={setActiveForm} switching={switchingState} getUserData={getUserData}/>);
    else
        return (<RegistrationForm setActiveForm={setActiveForm} switching={switchingState} getUserData={getUserData}/>);
};

export default AuthenticationForm;