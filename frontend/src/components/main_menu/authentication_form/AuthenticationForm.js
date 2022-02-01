// React:
import {useState} from "react";
// Styling:
import {doorSound} from "../../audio/AudioPlayer";
// Child components:
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const AuthenticationForm = ({initForm, loading, hide, show}) => {
    const [activeForm, setActiveForm] = useState(initForm);
    const [userData, setUserData] = useState({});

    const switchingForms = async () => {
        doorSound();
        await hide();
        setActiveForm(activeForm === "login" ? "registration" : "login");
        show();
    };

    if (activeForm === "login") {
        return (
            <LoginForm loading={loading} switching={switchingForms}/>
        );
    }
    return (
        <RegistrationForm loading={loading} switching={switchingForms}/>
    );
};

export default AuthenticationForm;