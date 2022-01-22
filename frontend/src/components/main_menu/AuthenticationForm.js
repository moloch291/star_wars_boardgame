import {useEffect, useRef, useState} from "react";
import registrationFormTextImg from "../../img/textImages/text_register.png";
import loginTextImg from "../../img/textImages/text_login.png";
import {doorSound, r2D2_3} from "../audio/AudioPlayer";

const AuthenticationForm = ({initForm, switchForms, loading}) => {
    const [activeForm, setActiveForm] = useState(initForm);
    const [userName, setUsername] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    const switching = () => {
        doorSound();
        switchForms();
        setTimeout(() => {
            setActiveForm(activeForm === "login" ? "registration" : "login");
        }, 500);
    };

    const submission = () => {
        let destination;
        let payload;
        console.log(activeForm)
        console.log(password1, password2);
        if (activeForm === "registration" && password1 === password2) {
            destination = "http://localhost:8000/registration";
            // Dummy data:
            payload = {
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                method: "POST",
                body: JSON.stringify({username: userName, email: emailAddress, password: password1})
            };
        } else if (activeForm === "login") {
            destination = "http://localhost:8000/login";
            // Dummy data:
            payload = {
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                method: "POST",
                body: JSON.stringify({email: emailAddress, password: password1})
            };
        } else {
            alert("Passwords should match!");
            return;
        }
        console.log(payload);
        fetch(destination, payload).then(function(res) {console.log(res)});
    };

    return (
        <div className={activeForm === "login" ? "loginForm" : "registrationForm"}>
            <div className={activeForm === "login" ? "loginWrapper" : "registrationWrapper"}>
                <img src={activeForm === "registration" ? registrationFormTextImg : loginTextImg} alt="form title"/>
                {activeForm === "registration" && <input type="text" id="username" name="username"
                                                         placeholder="Username"
                                                         onChange={(e) => {
                                                             setUsername(e.currentTarget.value);
                                                         }}/>}
                <input type="email" id="user-email" name="user-email" placeholder="Email"
                       onChange={(e) => {setEmailAddress(e.currentTarget.value);}}/>
                <input type="password" id="user-password" name="user-password" placeholder="Password"
                       onChange={(e) => {setPassword1(e.currentTarget.value);}}/>
                {activeForm === "registration" && <input type="password" id="user-password-again"
                                                         name="user-password-again" placeholder="Password again"
                                                         onChange={(e) => {
                                                             setPassword2(e.currentTarget.value);
                                                         }}/>}
                <p>.</p>
                <button className="formButton" onClick={() => {
                    r2D2_3();
                    loading();
                    submission();
                }}>
                    {activeForm === "login" ? "Login" : "Registration"}
                </button>
                <p>
                    {activeForm === "login" ? "New to the game?" : "Already have an account?"}
                </p>
                <button className="formButton" onClick={switching}>
                    {activeForm === "login" ? "Registration" : "Login"}
                </button>
            </div>
        </div>
    );
};

export default AuthenticationForm;