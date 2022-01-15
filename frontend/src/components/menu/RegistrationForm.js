import {Component} from "react";

import registrationFormTextImg from "../../img/textImages/text_register.png";
import {doorSound} from "../audio/AudioPlayer";

// const bcrypt = require("bcrypt");

class RegistrationForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            email: null,
            password1: null,
            password2: null
        }
    }

    componentDidMount() {
        setTimeout(
            () => document.querySelector(".registrationForm").classList.remove("fadeIn"),
            601
        );
    }

    /*async hashIt(password){
        const salt = await bcrypt.genSalt(6);
        return await bcrypt.hash(password, salt);
    }*/

    handleUsername = (event) => {
        this.setState({userName: event.currentTarget.value});
    }

    handleEmail = (event) => {
        this.setState({email: event.currentTarget.value});
    }

    handlePassword_1 = (event) => {
        this.setState({password1: event.currentTarget.value});
    }

    handlePassword_2 = (event) => {
        this.setState({password2: event.currentTarget.value});
    }

    matchingPasswords = async () => {
        if (this.state.password1 === this.state.password2) return true;
        else {
            alert("The passwords need to match...\nPlease make sure you typed the same password both times!");
            return false;
        }
    }

    submission = async () => {
        if (await this.matchingPasswords()) {
            fetch("http://localhost:8000/registration", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: this.state.userName,
                    email: this.state.email,
                    password: this.state.password1
                })
            }).then((response) => {
                    console.log(response);
                }
            );
        }
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
                               placeholder="Username"
                               onChange={this.handleUsername}/>
                        <input type="email"
                               id="user-email" name="user-email"
                               placeholder="Email"
                               onChange={this.handleEmail}/>
                        <input type="password"
                               id="user-password" name="user-password"
                               placeholder="Password"
                               onChange={this.handlePassword_1}/>
                        <input type="password"
                               id="user-password-again"
                               name="user-password-again"
                               placeholder="Password again"
                               onChange={this.handlePassword_2}/>
                        <p>.</p>
                        <button className="formButton"
                                onClick={(event) => {
                                        event.preventDefault();
                                        doorSound();
                                        this.submission().then();
                                    }
                                }
                                >Register</button>
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