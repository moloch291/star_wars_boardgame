import {Component} from "react";

import {playXWingEffect, xWingFire, tieFighterEffect, tieFighterFire} from "./AudioPlayer";

class MainButtons extends Component{

    render() {
        return (
            <div className="mainButtons">
                <button className="glow-on-hover"
                        id="login"
                        onMouseEnter={playXWingEffect}
                        onClick={() => {
                            this.props.setLogin()
                            xWingFire()
                        }}>Log in!
                </button>
                <button className="glow-on-hover"
                        id="registration"
                        onMouseEnter={tieFighterEffect}
                        onClick={() => {
                            this.props.setRegistration()
                            tieFighterFire()
                        }}>Registration!
                </button>
            </div>
        );
    }
}

export default MainButtons;