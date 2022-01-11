import {Component} from "react";
// components:
import FormContainer from "./FormContainer";
import StartButton from "./StartButton";
import SocialMediaButtons from "./SocialMediaButtons";
import HeaderImage from "./HeaderImage.js";
import AudioHandler from "../audio/AudioHandler";
// Style:
import '../../css/menu/forms.css';

class MainMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startButtonVisible: true,
            startButtonFadeOut: false,
            formContainerVisible: false
        }
    }

    fadeInFormContainer = () => {
        this.setState({startButtonFadeOut: true});
        setTimeout(
            () => this.setState({startButtonVisible: false}),
            600
        );
        setTimeout(
            () => this.setState({formContainerVisible: true}),
            600
        );
    }

    render() {
        // Possible elements:
        const startButton = <StartButton visible={this.state.startButtonVisible}
                                         initAuth={this.fadeInFormContainer}
                                         fadeOut={this.state.startButtonFadeOut}/>
        const formContainer = <FormContainer visible={this.state.formContainerVisible}
                                             activeElement="mainButtons"/>
        // Finalize output:
        let output = this.state.startButtonVisible ? startButton : formContainer;
        // Render:
        return (
            <div className="MainMenu">
                <HeaderImage/>
                <div className="mainContainer">
                    {output}
                </div>
                <SocialMediaButtons/>
                <AudioHandler/>
            </div>
        );
    };
}

export default MainMenu;