import {Component} from "react";
import {doorSound} from "../audio/AudioPlayer";

class RegistrationForm extends Component{

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
                <div className="registrationForm">
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
                            <button className="formButton"
                                    onClick={() => {
                                        doorSound();
                                        this.props.setLogin();
                            }}>
                                Log in!
                            </button>
                        </div>
                    </form>
                </div>
            );
        } return (<div/>);
    };
}

export default RegistrationForm;