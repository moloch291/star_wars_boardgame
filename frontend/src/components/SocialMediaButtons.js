function SocialMediaButtons() {
    return (
        <ul>
            <li>
                <i className="fab fa-facebook-f"
                   onClick={
                       () => {
                           window.open("https://www.facebook.com/komjatidaniel");
                           document.querySelector(".lightSaberSound4").play();
                       }
                   }
                   onMouseEnter={
                       () => document.querySelector(".lightSaberSound1").play()
                   }>
                </i>
            </li>
            <li>
                <i className="fab fa-linkedin-in"
                   onClick={
                       () => {
                           window.open(
                               "https://hu.linkedin.com/in/d%C3%A1niel-komj%C3%A1ti-6a6b3521a"
                           );
                           const saberHitSound = document.querySelector(".lightSaberSound5");
                           saberHitSound.volume = 0.7;
                           saberHitSound.play();
                       }
                   }
                   onMouseEnter={
                       () => document.querySelector(".lightSaberSound2").play()
                   }>
                </i>
            </li>
            <li>
                <i className="fab fa-github" aria-hidden={'true'}
                   onClick={
                       () => {
                           window.open("https://github.com/moloch291/star_wars_boardgame");
                           document.querySelector(".lightSaberSound6").play();
                       }
                   }
                   onMouseEnter={
                       () => document.querySelector(".lightSaberSound3").play()
                   }>
                </i>
            </li>
        </ul>
    );
}

export default SocialMediaButtons;