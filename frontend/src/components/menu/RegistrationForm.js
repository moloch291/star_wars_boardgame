import {Component} from "react";

import registrationFormTextImg from "../../img/textImages/text_register.png";
import {doorSound} from "../audio/AudioPlayer";

class RegistrationForm extends Component{

    componentDidMount() {
        setTimeout(
            () => document.querySelector(".registrationForm").classList.remove("fadeIn"),
            601
        );
    }

    render() {
        let classes = "registrationForm";
        if (this.props.fadeIn) classes += " fadeIn";
        if (this.props.fadeOut) classes += " fadeOut";
        return (
            <div className={classes}>
                <form>
                    <div className="registrationWrapper">
                        <img src={registrationFormTextImg} alt="register"/>
                        <input type="text"
                               id="username" name="username"
                               placeholder="Username"/>
                        <input type="email"
                               id="user-email" name="user-email"
                               placeholder="Email"/>
                        <input type="password"
                               id="user-password" name="user-password"
                               placeholder="Password"/>
                        <input type="password"
                               id="user-password-again"
                               name="user-password-again"
                               placeholder="Password again"/>
                        <p>.</p>
                        <button className="formButton">Register</button>
                        <p>Already have an account?</p>
                        <button id="registerFormSwitcher"
                                className="formButton"
                                onClick={(e) => {
                                    e.preventDefault();
                                    doorSound();
                                    this.props.setLogin(e.currentTarget);
                                }}>Login
                        </button>
                    </div>
                </form>
            </div>
        );
    };
}

export default RegistrationForm;