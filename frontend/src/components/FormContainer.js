import {Component} from "react";

import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import MainButtons from "./MainButtons";
import AudioHandler from "./AudioHandler";

class FormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeElement: <MainButtons setLogin={this.setLogin}
                                        setRegistration={this.setRegister}/>
        }
    }

    setRegister = () => {
        this.setState({
            activeElement: <RegistrationForm setLogin={this.setLogin}/>
        });
    }

    setLogin = () => {
        this.setState({
            activeElement: <LoginForm setRegistration={this.setRegister}/>
        });
    }

    render() {
        return (
            <div className="formContainer">
                {this.state.activeElement}
            </div>
        );
    }
}

export default FormContainer;