// React:
import {useState} from "react";
// Styling:
import registrationFormTextImg from "../../../img/textImages/text_register.png";
import { r2D2_3 } from "../../audio/AudioPlayer";


const RegistrationForm = ({setActiveForm, switching}) => {
    const [emailAddress, setEmailAddress] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    const submission = () => {
        if (password === passwordAgain) {
            const destination =  "http://localhost:8000/registration";
            const payload = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    username: username,
                    email: emailAddress,
                    password: password
                })
            };
            r2D2_3();
            setActiveForm("loading");
            fetch(destination, payload).then(function(res) {console.log(res)});
        } else alert("The passwords should match!");
    };

    return (
        <div className="registrationForm">
            <div className="registrationWrapper">
                <img src={registrationFormTextImg} alt="registration form title"/>
                <input type="text" id="username" name="username" placeholder="Username"
                       onChange={(e) => {setUsername(e.currentTarget.value);}}/>
                <input type="email" id="user-email" name="user-email" placeholder="Email"
                       onChange={(e) => {setEmailAddress(e.currentTarget.value);}}/>
                <input type="password" id="user-password" name="user-password" placeholder="Password"
                       onChange={(e) => {setPassword(e.currentTarget.value);}}/>
                <input type="password" id="user-password-again" name="user-password-again"
                       placeholder="Password again"
                       onChange={(e) => {setPasswordAgain(e.currentTarget.value);}}/>
                <p>.</p>
                <button className="formButton" onClick={submission}>Registration</button>
                <p>"Already have an account?"</p>
                <button className="formButton" onClick={switching}>Login</button>
            </div>
        </div>
    );
};

export default RegistrationForm;