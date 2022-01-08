import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import MainButtons from "./MainButtons";
import React from "react";


class FormContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible
        }
    }

    render() {
        return (
            <div className="formContainer">
                <MainButtons visible={true}/>
                <LoginForm visible={false}/>
                <RegistrationForm visible={false}/>
            </div>
        );
    }
}

export default FormContainer;