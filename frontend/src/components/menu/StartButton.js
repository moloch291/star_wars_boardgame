import {Component} from "react";

import startButton from '../../img/_jediButton.png';
import {r2D2_2} from "../audio/AudioPlayer";

class StartButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible
        }
    }

    render() {
        if (this.state.visible)
            return (
                <div id="mainContainer">
                    <img src={startButton}
                         alt="Press to start!"
                         title="Click to start!"
                         onMouseEnter={r2D2_2}
                         onClick={this.props.fadeInFormContainer}
                    />
                </div>
            );
        return (<div/>);
    }
}

export default StartButton;