export function playMainTheme() {
        let mainTheme = document.querySelector(".mainTheme");
        mainTheme.play();
        mainTheme.loop = true;
}

export function playXWingEffect() {
        const xWingFly = document.querySelector(".xWingSound");
        xWingFly.play();
}

export function xWingFire() {
        const xWingFire = document.querySelector(".xWingFire");
        xWingFire.play();
}

export function tieFighterEffect() {
        const tieFighterFly = document.querySelector(".tieFighterSound");
        tieFighterFly.play();
}

export function tieFighterFire() {
        const tieFighterFire = document.querySelector(".tieFighterFire");
        tieFighterFire.play();
}

export function doorSound() {
        const doorSound = document.querySelector(".doorOpen");
        doorSound.pause();
        doorSound.currentTime = 0;
        doorSound.play();
}

export function r2D2_1() {
        const r2D2_1 = document.querySelector(".r2D2-1");
        r2D2_1.play();
}

export function r2D2_2() {
        const r2D2_2 = document.querySelector(".r2D2-2");
        r2D2_2.play();
}

export function r2D2_3() {
        const r2D2_3 = document.querySelector(".r2D2-3");
        r2D2_3.play();
}

export function lightSaberActivation_1() {
        const lightSaberActivation_1 = document.querySelector(".lightSaberSound1");
        lightSaberActivation_1.play();
}

export function lightSaberActivation_2() {
        const lightSaberActivation_2 = document.querySelector(".lightSaberSound2");
        lightSaberActivation_2.play();
}

export function lightSaberActivation_3() {
        const lightSaberActivation_3 = document.querySelector(".lightSaberSound3");
        lightSaberActivation_3.play();
}

export function lightSaberHit_1() {
        const lightSaberHit_1 = document.querySelector(".lightSaberSound4");
        lightSaberHit_1.play();
}

export function lightSaberHit_2() {
        const lightSaberHit_2 = document.querySelector(".lightSaberSound5");
        lightSaberHit_2.play();
}

export function lightSaberHit_3() {
        const lightSaberHit_3 = document.querySelector(".lightSaberSound6");
        lightSaberHit_3.play();
}