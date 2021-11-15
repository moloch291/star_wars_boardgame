import menuTheme from "../audio/music/mainTheme_galaxyDivided.mp3";
import xWingSound from "../audio/effect/XWing flyby 1.mp3"
import TieFighterSound from "../audio/effect/TIE fighter flyby 1.mp3"


function AudioHandler() {
    return (
        <div className="audio">
            <MenuTheme/>
            <XWingEffect/>
            <TieFighterEffect/>
        </div>
    );
}

function TieFighterEffect() {
    return (
        <audio className="TieFighterSound">
            <source src={TieFighterSound}/>
        </audio>
    );
}

function XWingEffect() {
    return (
        <audio className="xWingSound">
            <source src={xWingSound}/>
        </audio>
    );
}

function MenuTheme() {
    return (
        <audio className="mainTheme">
            <source src={menuTheme}/>
        </audio>
    );
}

export default AudioHandler;