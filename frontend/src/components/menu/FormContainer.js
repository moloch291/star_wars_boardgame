import {Component} from "react";

import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import MainButtons from "./MainButtons";

class FormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selfVisible: props.visible,
            mainButtonsVisible: true,
            registrationFormVisible: false,
            loginFormVisible: false
        }
    }

    render() {
        if (this.state.selfVisible) {
            return (
                <div className="formContainer">
                    <MainButtons visible={this.state.mainButtonsVisible}/>
                    <RegistrationForm visible={this.state.registrationFormVisible}/>
                    <LoginForm visible={this.state.loginFormVisible}/>
                </div>
            );
        }
        return(<div/>);
    }
}

export default FormContainer;