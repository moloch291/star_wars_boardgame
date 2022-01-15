import {doorSound, playMainTheme, r2D2_1, r2D2_2} from "../audio/AudioPlayer";
import startButtonImg from "../../img/_jediButton.png";

const StartButton = ({initAuth}) => {

    const pressSound = () => {
        doorSound();
        r2D2_1();
        playMainTheme();
    };

    return (
        <img src={startButtonImg}
             id="startButton"
             alt="Press to start!"
             title="Click to start!"
             onMouseEnter={r2D2_2}
             onClick={() => {
                 pressSound();
                 initAuth();
            }}
        />
    );
}

export default StartButton;