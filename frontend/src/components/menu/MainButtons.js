import {Component} from "react";

import lightLoginTextImg from "../../img/textImages/text-loginLight.png"
import lightRegisterTextImg from "../../img/textImages/text_registerLight.png"

import {
    playXWingEffect, xWingFire,
    tieFighterEffect, tieFighterFire
} from "../audio/AudioPlayer";

class MainButtons extends Component{

    async componentDidMount() {
        let self = document.querySelector(".mainButtonContainer");
        self.classList.add("fadeIn");
        await self.removeAttribute("hidden");
        self.classList.remove("fadeIn");
    }

    render() {
        return (
            <div className="mainButtonContainer" hidden>
                <button className="glow-on-hover"
                        id="login"
                        onMouseEnter={playXWingEffect}
                        onClick={() => {
                            xWingFire();
                            this.props.setLogin();
                        }}>
                    <img src={lightLoginTextImg} alt="login button"/>
                </button>
                <button className="glow-on-hover"
                        id="registration"
                        onMouseEnter={tieFighterEffect}
                        onClick={() => {
                            tieFighterFire();
                            this.props.setRegistration();
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