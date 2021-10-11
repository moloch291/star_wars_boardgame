function playTheme() {
    const mainTheme = new Audio(
        "/static/audio/music/mainTheme_galaxyDivided.mp3"
    );
    mainTheme.play().then(() => {return null;});
}

function handleSocialMediaButton(selector, url) {
    const socialMediaLink = document.querySelector(selector);
    socialMediaLink.addEventListener(
        "click",
        () => {
            window.open(url);
        });
}

function handleSocialMediaButtons() {
    // Add redirection to facebook button:
    handleSocialMediaButton(
        ".fa-facebook-f",
        "https://www.facebook.com/komjatidaniel/"
    );
    // Add redirection to linkedIn button:
    handleSocialMediaButton(
        ".fa-linkedin-in",
        "https://www.linkedin.com/in/d%C3%A1niel-komj%C3%A1ti-6a6b3521a"
    );
    handleSocialMediaButton(
        ".fa-github",
        "https://github.com/moloch291/star_wars_boardgame"
    );
}

function handleMain() {
    playTheme();
    handleSocialMediaButtons();
}

window.onload = handleMain;