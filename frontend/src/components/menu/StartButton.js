import {Component} from "react";

import startButton from '../../img/_jediButton.png';
import {doorSound, playMainTheme, r2D2_1, r2D2_2} from "../audio/AudioPlayer";

class StartButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeOut: this.props.fadeOut
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.visible !== prevProps.visible) {
            this.setState({
                visible: this.props.visible
            });
        }
    }

    pressSound() {
        doorSound();
        r2D2_1();
        playMainTheme();
    }

    render() {
        let classes = this.props.fadeOut ? "fadeOut" : "";
        return (
            <img src={startButton}
                 id="startButton"
                 className={classes}
                 alt="Press to start!"
                 title="Click to start!"
                 onMouseEnter={r2D2_2}
                 onClick={() => {
                     this.pressSound();
                     this.props.fadeInFormContainer();
                 }}/>
        );
    }
}

export default StartButton;