import {Component} from "react";

import startButton from '../img/_jediButton.png';
import {playMainTheme, doorSound, r2D2_1, r2D2_2} from "./AudioPlayer";

class StartButton extends Component {

    auth = () => {
        doorSound()
        r2D2_1()
        playMainTheme()
        this.props.startAuth()
    }

    render() {
        return (
            <img src={startButton}
                 id="StartButton"
                 alt="Press to start!"
                 title="Click to start!"
                 onMouseEnter={r2D2_2}
                 onClick={this.auth}/>
        );
    }
}

export default StartButton;