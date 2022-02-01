import {doorSound, playMainTheme, r2D2_1, r2D2_2} from "../audio/AudioPlayer";
import startButtonImg from "../../img/_jediButton.png";

const StartButton = ({setActiveForm, hide, show}) => {

    const pressSound = () => {
        doorSound();
        r2D2_1();
        playMainTheme();
    };

    return (
        <img src={startButtonImg}
             id="startButton"
             className="fadeIn"
             alt="Press to start!"
             title="Click to start!"
             onMouseEnter={r2D2_2}
             onClick={async () => {
                 pressSound();
                 await hide();
                 setActiveForm("mainButtons");
                 show();
            }}
        />
    );
}

export default StartButton;