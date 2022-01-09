import {Component} from "react";

class LoginForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible
        }
    }


    render() {
        if (this.state.visible === true) {
            return (
                <div className="loginForm">
                    <div className="loginWrapper">
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
                            <p>.</p>
                            <button className="formButton">Log in!</button>
                            <p>New to the game?</p>
                            <button className="formButton">
                                Register!
                            </button>
                        </form>
                    </div>
                </div>
            );
        } return (<div/>);
    }
}

export default LoginForm;