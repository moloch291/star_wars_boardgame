//React:
import {useState} from "react";
// Styling:
import loginTextImg from "../../../img/textImages/text_login.png";
import { r2D2_3 } from "../../audio/AudioPlayer";


const LoginForm = ({setActiveForm, switching}) => {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const submission = () => {
        const destination =  "http://localhost:8000/login";
        const payload = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                email: emailAddress,
                password: password
            })
        };
        r2D2_3();
        setActiveForm("loading");
        fetch(destination, payload).then(function(res) {console.log(res)});
    };

    return (
        <div className="loginForm">
            <div className="loginWrapper">
                <img src={loginTextImg} alt="login form title"/>
                <input type="email" id="user-email" name="user-email" placeholder="Email" required
                    onChange={(e) => {setEmailAddress(e.currentTarget.value)}}/>
                <input type="password" id="user-password" name="user-password" placeholder="Password" required
                    onChange={(e) => {setPassword(e.currentTarget.value)}}/>
                    <p>.</p>
                <button className="formButton" onClick={submission}>Login</button>
                    <p>"New to the game?"</p>
                <button className="formButton" onClick={switching}>Registration</button>
            </div>
        </div> 
    );
};

export default LoginForm;