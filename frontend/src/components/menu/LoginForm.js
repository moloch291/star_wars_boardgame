import {Component} from "react";

class LoginForm extends Component{

    render() {
        return (
            <div className="loginForm" hidden>
                <form>
                    <h3>Login</h3>
                    <input type="email"
                           id="user-email"
                           name="user-email"
                           placeholder="Email"/>
                    <input type="password"
                           id="user-password"
                           name="user-password"
                           placeholder="Password"/>
                    <button className="formButton">Log in!</button>
                    <p>New to the game?</p>
                    <button className="formButton" onClick={this.props.setRegistration}>
                        Register!
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginForm;