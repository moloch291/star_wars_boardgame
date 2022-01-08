import {Component} from "react";

import '../css/mainPage.css';
import FormContainer from "./FormContainer";
import StartButton from "./StartButton";
import SocialMediaButtons from "./SocialMediaButtons";
import HeaderImage from "./HeaderImage.js";


class MainMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeElement: <StartButton/>
        };
        this.updateState = this.updateState.bind(this);
    };

    updateState() {
        this.setState({
            activeElement: <FormContainer/>
        });
    };

    render() {
        return (
            <div className="MainMenu">
                <HeaderImage/>
                <div onClick={this.updateState}>
                    {this.state.activeElement}
                </div>
                <SocialMediaButtons/>
            </div>
        );
    };
}

export default MainMenu;