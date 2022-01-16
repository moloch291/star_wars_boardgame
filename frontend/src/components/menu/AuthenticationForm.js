import {useEffect, useRef, useState} from "react";
import registrationFormTextImg from "../../img/textImages/text_register.png";
import loginTextImg from "../../img/textImages/text_login.png";
import {doorSound} from "../audio/AudioPlayer";

const AuthenticationForm = ({initForm, switchForms}) => {
    const [activeForm, setActiveForm] = useState(initForm);

    const switching = () => {
        doorSound();
        switchForms();
        setTimeout(() => {
            setActiveForm(activeForm === "login" ? "registration" : "login");
        }, 500);
    };

    const matchingPasswords = () => {
        //Todo: This function will match form passwords...
    };

    const submission = () => {
        let destination;
        let payload;
        if (activeForm === "registration" && matchingPasswords()) {
            destination = "http://localhost:8000/registration";
            // Dummy data:
            payload = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    // Dummy data:
                    username: "username",
                    email: "email@address.com",
                    password: "password"
                })
            };
        } else {
            destination = "http://localhost:8000/login";
            // Dummy data:
            payload = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    // Dummy data:
                    email: "email@address.com",
                    password: "password"
                })
            };
        }
        fetch(destination, payload).then(function(res) {console.log(res)});
    };

    return (
        <div className={activeForm === "login" ? "loginForm" : "registrationForm"}>
            <div className={activeForm === "login" ? "loginWrapper" : "registrationWrapper"}>
                <img src={activeForm === "registration" ? registrationFormTextImg : loginTextImg} alt="form title"/>
                {activeForm === "registration" && <input type="text" id="username" name="username"
                                                         placeholder="Username"/>}
                <input type="email" id="user-email" name="user-email" placeholder="Email"/>
                <input type="password" id="user-password" name="user-password" placeholder="Password"/>
                {activeForm === "registration" && <input type="password" id="user-password-again"
                                                         name="user-password-again" placeholder="Password again"/>}
                <p>.</p>
                <button className="formButton" onClick={submission}>
                    {activeForm === "login" ? "Login" : "Registration"}
                </button>
                <p>
                    {activeForm === "login" ? "New to the game?" : "Already have an account?"}
                </p>
                <button className="formButton"
                        onClick={() => {
                            switching()
                        }}>
                    {activeForm === "login" ? "Registration" : "Login"}
                </button>
            </div>
        </div>
    );
};

export default AuthenticationForm;