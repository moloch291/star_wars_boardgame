import {useEffect, useState} from "react";
import registrationFormTextImg from "../../img/textImages/text_register.png";
import loginTextImg from "../../img/textImages/text_login.png";
import {doorSound} from "../audio/AudioPlayer";

const AuthenticationForm = ({initForm}) => {
    const [form, setForm] = useState(initForm);

    return (
        <div className={form === "login" ? "loginForm" : "registrationForm"}>
            <div className={form === "login" ? "loginWrapper" : "registrationWrapper"}>
                <img src={
                    form === "registration" ? registrationFormTextImg : loginTextImg
                } alt="form title"/>
                {form === "registration" && <input type="text" id="username" name="username" placeholder="Username"/>}
                <input type="email"
                       id="user-email"
                       name="user-email"
                       placeholder="Email"/>
                <input type="password"
                       id="user-password"
                       name="user-password"
                       placeholder="Password"/>
                {
                    form === "registration" && <input type="password" id="user-password-again"
                                                      name="user-password-again"
                                                      placeholder="Password again"/>
                }
                <p>.</p>
                <button className="formButton">
                    {form === "login" ? "Login" : "Registration"}
                </button>
                <p>
                    {form === "login" ? "New to the game?" : "Already have an account?"}
                </p>
                <button className="formButton"
                        onClick={() => {
                            doorSound();
                            setForm(form === "login" ? "registration" : "login");
                        }}>
                    {form === "login" ? "Registration" : "Login"}
                </button>
            </div>
        </div>
    );
};

export default AuthenticationForm;