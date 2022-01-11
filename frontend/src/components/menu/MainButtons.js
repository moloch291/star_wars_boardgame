import {Component} from "react";

import lightLoginTextImg from "../../img/textImages/text-loginLight.png"
import lightRegisterTextImg from "../../img/textImages/text_registerLight.png"

import {
    playXWingEffect, xWingFire,
    tieFighterEffect, tieFighterFire
} from "../audio/AudioPlayer";

class MainButtons extends Component{

    render() {
        let classes = "mainButtonContainer";
        classes += this.props.fadeOut ? " fadeOut" : "";

        return (
            <div className={classes}>
                <button className="glow-on-hover"
                        id="login"
                        onMouseEnter={playXWingEffect}
                        onClick={(e) => {
                            xWingFire();
                            this.props.setLogin(e.currentTarget);
                        }}>
                    <img src={lightLoginTextImg} alt="login button"/>
                </button>
                <button className="glow-on-hover"
                        id="registration"
                        onMouseEnter={tieFighterEffect}
                        onClick={(e) => {
                            tieFighterFire();
                            this.props.setRegistration(e.currentTarget);
                        }}>
                    <img src={lightRegisterTextImg}
                         alt="login button"
                         className="registerButtonText"/>
                </button>
            </div>
        );
    }
}

export default MainButtons;