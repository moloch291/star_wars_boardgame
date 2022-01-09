import {Component} from "react";

class RegistrationForm extends Component{

    render() {
        return (
            <div className="registrationForm" hidden>
                <form>
                    <div className="registrationWrapper">
                        <h3>Registration</h3>
                        <input type="text"
                               id="username"
                               name="username"
                               placeholder="Username"/>
                        <input type="email"
                               id="user-email"
                               name="user-email"
                               placeholder="Email"/>
                        <input type="password"
                               id="user-password"
                               name="user-password"
                               placeholder="Password"/>
                        <input type="password"
                               id="user-password-again"
                               name="user-password-again"
                               placeholder="Password again"/>
                        <p>.</p>
                        <button className="formButton">Register!</button>
                        <p>Already have an account?</p>
                        <button className="formButton" onClick={this.props.setLogin}>
                            Log in!
                        </button>
                    </div>
                </form>
            </div>
        );
    };
}

export default RegistrationForm;