import menuTheme from "../audio/music/mainTheme_galaxyDivided.mp3";
import xWingSound from "../audio/effect/XWing flyby 1.mp3";
import xWingFire from "../audio/effect/XWing fire.mp3";
import TieFighterSound from "../audio/effect/TIE fighter flyby 1.mp3";
import TieFighterShot from "../audio/effect/TIE fighter fire.mp3";
import lightSaber1 from "../audio/effect/lightsaber1.wav";
import lightSaber2 from "../audio/effect/lightsaber2.wav";
import lightSaber3 from "../audio/effect/lightsaber3.wav";


function AudioHandler() {
    return (
        <div className="audio">
            <MenuTheme/>
            <XWingEffect/>
            <XWingFire/>
            <TieFighterEffect/>
            <TieFighterFire/>
            <LightSaberSound1/>
            <LightSaberSound2/>
            <LightSaberSound3/>
        </div>
    );
}

function LightSaberSound1() {
    return (
        <audio className="lightSaberSound1">
            <source src={lightSaber1}/>
        </audio>
    );
}

function LightSaberSound2() {
    return (
        <audio className="lightSaberSound2">
            <source src={lightSaber2}/>
        </audio>
    );
}

function LightSaberSound3() {
    return (
        <audio className="lightSaberSound3">
            <source src={lightSaber3}/>
        </audio>
    );
}

function TieFighterEffect() {
    return (
        <audio className="TieFighterSound">
            <source src={TieFighterSound}/>
        </audio>
    );
}

function TieFighterFire() {
    return (
        <audio className="TieFighterFire">
            <source src={TieFighterShot}/>
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

function XWingFire() {
    return <audio className="xWingFire">
        <source src={xWingFire}/>
    </audio>
}

function MenuTheme() {
    return (
        <audio className="mainTheme">
            <source src={menuTheme}/>
        </audio>
    );
}

export default AudioHandler;