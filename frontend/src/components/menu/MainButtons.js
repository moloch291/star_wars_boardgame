import {Component} from "react";

import {
    playXWingEffect, xWingFire,
    tieFighterEffect, tieFighterFire
} from "../audio/AudioPlayer";

class MainButtons extends Component{

    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible
        }
    }

    render() {
        return (
            <div className="mainContainer">
                <button className="glow-on-hover"
                        id="login"
                        onMouseEnter={playXWingEffect}
                        onClick={() => {
                            xWingFire()
                        }}>Log in!
                </button>
                <button className="glow-on-hover"
                        id="registration"
                        onMouseEnter={tieFighterEffect}
                        onClick={() => {
                            tieFighterFire()
                        }}>Registration!
                </button>
            </div>
        );
    }
}

export default MainButtons;