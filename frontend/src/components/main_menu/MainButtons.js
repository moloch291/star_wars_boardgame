import '../../css/menu/mainButtons.css';

import lightLoginTextImg from "../../img/textImages/text-loginLight.png"
import lightRegisterTextImg from "../../img/textImages/text_registerLight.png"

import {
    playXWingEffect, xWingFire,
    tieFighterEffect, tieFighterFire
} from "../audio/AudioPlayer";

const MainButtons = ({initFormState, initForm}) => {

    return (
        <div className="mainButtonContainer formContainer">
            <button className="glow-on-hover"
                    id="login"
                    onMouseEnter={playXWingEffect}
                    onClick={async () => {
                        xWingFire();
                        await initFormState("login");
                        initForm();
                    }}>
                <img src={lightLoginTextImg} alt="login button"/>
            </button>
            <button className="glow-on-hover"
                    id="registration"
                    onMouseEnter={tieFighterEffect}
                    onClick={async () => {
                        tieFighterFire();
                        await initFormState("registration");
                        initForm();
                    }}>
                <img src={lightRegisterTextImg}
                     alt="login button"
                     className="registerButtonText"/>
            </button>
        </div>
    );

}

export default MainButtons;