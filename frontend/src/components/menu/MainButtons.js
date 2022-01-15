import '../../css/mainButtons.css';

import lightLoginTextImg from "../../img/textImages/text-loginLight.png"
import lightRegisterTextImg from "../../img/textImages/text_registerLight.png"

import {
    playXWingEffect, xWingFire,
    tieFighterEffect, tieFighterFire
} from "../audio/AudioPlayer";

const MainButtons = ({initFormState}) => {

    return (
        <div className="mainButtonContainer formContainer fadeIn">
            <button className="glow-on-hover fadeIn"
                    id="login"
                    onMouseEnter={playXWingEffect}
                    onClick={(e) => {
                        xWingFire();
                        initFormState("login");
                    }}>
                <img src={lightLoginTextImg} alt="login button"/>
            </button>
            <button className="glow-on-hover fadeIn"
                    id="registration"
                    onMouseEnter={tieFighterEffect}
                    onClick={(e) => {
                        tieFighterFire();
                        initFormState("registration");
                    }}>
                <img src={lightRegisterTextImg}
                     alt="login button"
                     className="registerButtonText"/>
            </button>
        </div>
    );

}

export default MainButtons;