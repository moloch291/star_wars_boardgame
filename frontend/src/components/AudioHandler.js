import menuTheme from "../audio/music/funeralOfPadme.mp3";
import xWingSound from "../audio/effect/XWing flyby 1.mp3";
import xWingFire from "../audio/effect/XWing fire.mp3";
import TieFighterSound from "../audio/effect/TIE fighter flyby 1.mp3";
import TieFighterShot from "../audio/effect/TIE fighter fire.mp3";
import lightSaberActivation1 from "../audio/effect/lightsaberActivation1.mp3";
import lightSaberActivation2 from "../audio/effect/lightsaberActivation2.mp3";
import lightSaberActivation3 from "../audio/effect/lightsaberActivation3.mp3";
import lightSaberHit1 from "../audio/effect/lightsaberHit1.mp3";
import lightSaberHit2 from "../audio/effect/lightsaberHit2.mp3";
import lightSaberHit3 from "../audio/effect/lightsaberHit3.mp3";
import R2D2_Happy from "../audio/effect/Happy ThreeChirp.mp3";
import R2D2_Happy_2 from "../audio/effect/Happy Confirmation.mp3";
import doorSound from "../audio/effect/Blast door.mp3";


function AudioHandler() {
    return (
        <div className="audio">
            <MenuTheme/>
            <XWingEffect/>
            <XWingFire/>
            <TieFighterEffect/>
            <TieFighterFire/>
            <LightSaberActivation1/>
            <LightSaberActivation2/>
            <LightSaberActivation3/>
            <LightSaberHit1/>
            <LightSaberHit2/>
            <LightSaberHit3/>
            <R2D2_1/>
            <R2D2_2/>
            <DoorOpenSound/>
        </div>
    );
}

// Hover and click sound effects in menu:

function DoorOpenSound() {
    return (
        <audio className="DoorOpen">
            <source src={doorSound}/>
        </audio>
    );
}

function R2D2_1() {
    return (
        <audio className="R2D2-1">
            <source src={R2D2_Happy}/>
        </audio>
    );
}

function R2D2_2() {
    return (
        <audio className="R2D2-2">
            <source src={R2D2_Happy_2}/>
        </audio>
    );
}

function LightSaberActivation1() {
    return (
        <audio className="lightSaberSound1">
            <source src={lightSaberActivation1}/>
        </audio>
    );
}

function LightSaberActivation2() {
    return (
        <audio className="lightSaberSound2">
            <source src={lightSaberActivation2}/>
        </audio>
    );
}

function LightSaberActivation3() {
    return (
        <audio className="lightSaberSound3">
            <source src={lightSaberActivation3}/>
        </audio>
    );
}

function LightSaberHit1() {
    return (
        <audio className="lightSaberSound4">
            <source src={lightSaberHit1}/>
        </audio>
    );
}

function LightSaberHit2() {
    return (
        <audio className="lightSaberSound5">
            <source src={lightSaberHit2}/>
        </audio>
    );
}

function LightSaberHit3() {
    return (
        <audio className="lightSaberSound6">
            <source src={lightSaberHit3}/>
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

// Music in menu:

function MenuTheme() {
    return (
        <audio className="mainTheme">
            <source src={menuTheme}/>
        </audio>
    );
}

export default AudioHandler;
