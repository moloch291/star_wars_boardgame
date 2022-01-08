import {Component} from "react";

import '../css/mainPage.css';
import FormContainer from "./FormContainer";
import StartButton from "./StartButton";
import SocialMediaButtons from "./SocialMediaButtons";
import HeaderImage from "./HeaderImage.js";
import AudioHandler from "./AudioHandler";


class MainMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeElement: <StartButton startAuth={this.updateActiveElement}/>
        };
    };

    updateActiveElement = () => {
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