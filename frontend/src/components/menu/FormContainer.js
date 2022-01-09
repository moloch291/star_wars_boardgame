import {Component} from "react";

import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import MainButtons from "./MainButtons";

class FormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible,
            mainButtonsVisible: true,
            registrationFormVisible: false,
            loginFormVisible: false
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.visible !== prevProps.visible) {
            this.setState({
                visible: this.props.visible
            });
        }
    }

    setLogin = () => {
        this.setState({
            mainButtonsVisible: false,
            registrationFormVisible: false,
            loginFormVisible: true
        });
    }

    setRegistration = () => {
        this.setState({
            mainButtonsVisible: false,
            registrationFormVisible: true,
            loginFormVisible: false
        });
    }

    render() {
        if (this.state.visible) {
            return (
                <div className="formContainer">
                    <MainButtons visible={this.state.mainButtonsVisible}
                                 setLogin={this.setLogin}
                                 setRegistration={this.setRegistration}/>
                    <RegistrationForm visible={this.state.registrationFormVisible}
                                      setLogin={this.setLogin}/>
                    <LoginForm visible={this.state.loginFormVisible}
                               setRegistration={this.setRegistration}/>
                </div>
            );
        }
        return(<div/>);
    }
}

export default FormContainer;