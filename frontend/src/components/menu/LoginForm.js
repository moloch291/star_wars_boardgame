import {Component} from "react";

import loginTextImg from "../../img/textImages/text_login.png";
import {doorSound} from "../audio/AudioPlayer";

class LoginForm extends Component{

    componentDidMount() {
        setTimeout(
            () => document.querySelector(".loginForm").classList.remove("fadeIn"),
            601
        );
    }

    render() {
        let classes = "loginForm";
        if (this.props.fadeIn) classes += " fadeIn";
        if (this.props.fadeOut) classes += " fadeOut";
        return (
            <div className={classes}>
                <div className="loginWrapper">
                    <form>
                        <img src={loginTextImg} alt="login text"/>
                        <input type="email"
                               id="user-email"
                               name="user-email"
                               placeholder="Email"/>
                        <input type="password"
                               id="user-password"
                               name="user-password"
                               placeholder="Password"/>
                        <p>.</p>
                        <button className="formButton">Login</button>
                        <p>New to the game?</p>
                        <button id="loginFormSwitcher"
                                className="formButton"
                                onClick={(e) => {
                                    e.preventDefault();
                                    doorSound();
                                    this.props.setRegistration(e.currentTarget);
                                }}>Register
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;