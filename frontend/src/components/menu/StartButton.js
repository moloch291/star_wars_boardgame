import {useState, useEffect} from "react";
import {doorSound, playMainTheme, r2D2_1, r2D2_2} from "../audio/AudioPlayer";
import startButton from "../../img/_jediButton.png";

const StartButtonFunc = (props) => {
    const [selfVisible, setSelfVisible] = useState(props.visible);

    const pressSound = () => {
        doorSound();
        r2D2_1();
        playMainTheme();
    }

    if (!selfVisible) {
        console.log(selfVisible);
        document.querySelector("#startButton").classList.add("fadeOut");
        setTimeout(() => {return null;}, 600);
    }

    return (
        <img src={startButton}
             id="startButton"
             alt="Press to start!"
             title="Click to start!"
             onMouseEnter={r2D2_2}
             onClick={() => {
                 pressSound();
                 props.initAuth();
             }}/>
    );
}

export default StartButtonFunc;