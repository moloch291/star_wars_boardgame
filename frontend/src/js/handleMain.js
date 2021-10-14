function playTheme() {
    const mainTheme = new Audio("../audio/music/mainTheme_galaxyDivided.mp3");
    mainTheme.play().then(() => {return null;});
}

 export function handleMain() {
    playTheme();
}

window.onload = handleMain;