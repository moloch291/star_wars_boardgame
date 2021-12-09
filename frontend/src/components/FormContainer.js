import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import MainButtons from "./MainButtons";

function FormContainer() {
    return (
        <div className="formContainer" hidden>
            <MainButtons/>
            <LoginForm/>
            <RegistrationForm/>
        </div>
    );
}

export default FormContainer;
