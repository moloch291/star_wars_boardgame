import {Component} from "react";

import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import MainButtons from "./MainButtons";

class FormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible,
            activeElement: "mainButtons",
            // Main button states:
            mainButtonsFadeOut: false,
            // Registration form states:
            registrationFormFadeIn: false,
            registrationFormFadeOut: false,
            // Login from states:
            loginFormFadeIn: false,
            loginFormFadeOut: false
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.visible !== prevProps.visible)
            this.setState({visible: this.props.visible});
        if (this.props.activeElement !== prevProps.activeElement)
            this.setState({activeElement: this.props.activeElement});
    }

    componentDidMount() {
        setTimeout(
            () => document.querySelector(".formContainer").classList.remove("fadeIn"),
            601
        );
    }

    //##################################################################################################################

    setLogin = (e) => {
        if (e.attributes.id.value === "login") {
            this.setState({mainButtonsFadeOut: true});
            setTimeout(() => this.setState({mainButtonVisible: false}), 600);
            setTimeout(() => this.setState({mainButtonsFadeOut: false}), 601);
        }
        if (e.attributes.id.value === "registerFormSwitcher") {
            this.setState({registrationFormFadeOut: true});
            setTimeout(() => this.setState({registrationFormVisible: false}), 600);
            setTimeout(() => this.setState({registrationFormFadeOut: false}), 601);
        }
        setTimeout(() => this.setState({activeElement: "loginForm"}), 600);
        setTimeout(() => this.setState({loginFormFadeIn: true}), 600);
        setTimeout(() => this.setState({loginFormVisible: true}), 1200);
        setTimeout(() => this.setState({loginFormFadeIn: false}), 1200);
    }

    setRegistration = (e) => {
        console.log(e.attributes.id.value);
        if (e.attributes.id.value === "registration") {
            this.setState({mainButtonsFadeOut: true});
            setTimeout(() => this.setState({mainButtonVisible: false}), 600);
            setTimeout(() => this.setState({mainButtonsFadeOut: false}), 601);
        }
        if (e.attributes.id.value === "loginFormSwitcher") {
            this.setState({loginFormFadeOut: true});
            setTimeout(() => this.setState({loginFormVisible: false}), 600);
            setTimeout(() => this.setState({loginFormFadeOut: false}), 601);
        }
        setTimeout(() => this.setState({activeElement: "registrationForm"}), 600);
        setTimeout(() => this.setState({registrationFormFadeIn: true}), 600);
        setTimeout(() => this.setState({registrationFormVisible: true}), 1200);
        setTimeout(() => this.setState({registrationFormFadeIn: false}), 1200);
    }

    //##################################################################################################################

    render() {
        const mainButtons = <MainButtons setLogin={this.setLogin}
                                         setRegistration={this.setRegistration}
                                         fadeOut={this.state.mainButtonsFadeOut}/>
        const registrationForm = <RegistrationForm setLogin={this.setLogin}
                                                   fadeIn={this.state.registrationFormFadeIn}
                                                   fadeOut={this.state.registrationFormFadeOut}/>
        const loginForm = <LoginForm setRegistration={this.setRegistration}
                                     fadeIn={this.state.loginFormFadeIn}
                                     fadeOut={this.state.loginFormFadeOut}/>
        let output;
        if (this.state.activeElement === "mainButtons")
            output = mainButtons;
        else if (this.state.activeElement === "loginForm")
            output = loginForm
        else
            output = registrationForm
        return (
            <div className="formContainer fadeIn">
                {output}
            </div>
        );
    }
}

export default FormContainer;