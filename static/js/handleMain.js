function playTheme() {
    const mainTheme = new Audio("static/audio/music/mainTheme_galaxyDivided.mp3");
    mainTheme.play();
}

function handleMain() {
    playTheme();
}

window.onload = handleMain;