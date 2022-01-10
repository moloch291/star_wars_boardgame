import {Component} from "react";

import loginTextImg from "../../img/textImages/text_login.png";
import {doorSound} from "../audio/AudioPlayer";

class LoginForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.visible !== prevProps.visible) {
            this.setState({
                visible: this.props.visible
            });
        }
    }

    render() {
        if (this.state.visible === true) {
            return (
                <div className="loginForm">
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
                            <button className="formButton"
                                    onClick={() => {
                                        doorSound();
                                        this.props.setRegistration();
                                    }}>Register
                            </button>
                        </form>
                    </div>
                </div>
            );
        } return (<div/>);
    }
}

export default LoginForm;