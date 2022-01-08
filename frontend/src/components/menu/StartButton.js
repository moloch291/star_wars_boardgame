import {Component} from "react";

import startButton from '../../img/_jediButton.png';
import {r2D2_2} from "../audio/AudioPlayer";

class StartButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img src={startButton}
                 id="StartButton"
                 alt="Press to start!"
                 title="Click to start!"
                 onMouseEnter={r2D2_2}
                 onClick={this.props.startAuth}
            />
        );
    }
}

export default StartButton;