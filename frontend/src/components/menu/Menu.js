import {Component} from "react";

import '../../css/mainPage.css';
import FormContainer from "./FormContainer";
import StartButton from "./StartButton";
import SocialMediaButtons from "./SocialMediaButtons";
import HeaderImage from "./HeaderImage.js";
import AudioHandler from "../audio/AudioHandler";
import {doorSound, playMainTheme, r2D2_1} from "../audio/AudioPlayer";


class MainMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeElement: <StartButton startAuth={this.initAuth}/>
        };
    };

    initAuth = () => {
        doorSound();
        r2D2_1();
        playMainTheme();
        this.setState({
            activeElement: <FormContainer/>
        });
    };

    render() {
        return (
            <div className="MainMenu">
                <HeaderImage/>
                {this.state.activeElement}
                <SocialMediaButtons/>
                <AudioHandler/>
            </div>
        );
    };
}

export default MainMenu;