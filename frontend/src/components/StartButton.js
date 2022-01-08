import {Component} from "react";

import startButton from '../img/_jediButton.png';
import {playMainTheme} from "./AudioPlayer";

class StartButton extends Component {

    render() {
        return (
            <img src={startButton}
                 id="StartButton"
                 alt="Press to start!"
                 title="Click to start!"
                 onClick={playMainTheme}/>
        );
    }
}

export default StartButton;