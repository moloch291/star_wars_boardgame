import {Component} from "react";

class RegistrationForm extends Component{

    render() {
        return (
            <div className="registrationForm" hidden>
                <h3>Registration</h3>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username"/>
                    <label htmlFor="user-email">Email:</label>
                    <input type="email" id="user-email" name="user-email"/>
                    <label htmlFor="user-password">Password:</label>
                    <input type="password" id="user-password" name="user-password"/>
                    <label htmlFor="user-password-again">Password again:</label>
                    <input type="password"
                           id="user-password-again"
                           name="user-password-again"/>
                    <button className="formButton">Register!</button>
                    <p>Already have an account?</p>
                    <button className="formButton" onClick={this.props.setLogin}>
                        Log in!
                    </button>
                </form>
            </div>
        );
    };
}

export default RegistrationForm;