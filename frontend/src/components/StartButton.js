import {Component} from "react";

import startButton from '../img/_jediButton.png';

class StartButton extends Component {

    render() {
        return (
            <img src={startButton}
                 id="StartButton"
                 alt="Press to start!"
                 title="Click to start!"
            />
        );
    }
}

export default StartButton;