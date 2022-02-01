// React:
import {useState} from "react";
// Styling:
import {doorSound} from "../../audio/AudioPlayer";
// Child components:
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";


const AuthenticationForm = ({initForm, setActiveState, hide, show, getUserData}) => {
    const [activeForm, setActiveForm] = useState(initForm);

    const switchingState = async () => {
        doorSound();
        await hide();
        setActiveForm(activeForm === "login" ? "registration" : "login");
        show();
    };

    if (activeForm === "login")
        return (<LoginForm setActiveState={setActiveState} switching={switchingState} getUserData={getUserData}/>);
    return ( <RegistrationForm setActiveState={setActiveState} switching={switchingState} getUserData={getUserData}/>);
};

export default AuthenticationForm;