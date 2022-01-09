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
            formContainerVisible: false
        }
    }

    fadeInFormContainer = async () => {
        await this.setState({
            startButtonVisible: false
        });
        this.setState({
            formContainerVisible: true
        });
    }

    render() {
        return (
            <div className="MainMenu">
                <HeaderImage/>
                <div className="mainContainer">
                    <StartButton visible={this.state.startButtonVisible}
                                 fadeInFormContainer={this.fadeInFormContainer}/>
                    <FormContainer visible={this.state.formContainerVisible}/>
                </div>
                <SocialMediaButtons/>
                <AudioHandler/>
            </div>
        );
    };
}

export default MainMenu;