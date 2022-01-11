import {Component} from "react";

import {
    lightSaberActivation_1, lightSaberActivation_2, lightSaberActivation_3,
    lightSaberHit_1, lightSaberHit_2, lightSaberHit_3
} from "../audio/AudioPlayer";

class SocialMediaButtons extends Component {

    facebookEvent() {
        window.open("https://www.facebook.com/komjatidaniel/");
        lightSaberHit_1();
    }

    linkedInEvent() {
        window.open(
            "https://www.linkedin.com/in/d%C3%A1niel-komj%C3%A1ti-6a6b3521a/"
        );
        lightSaberHit_2();
    }

    githubEvent() {
        window.open("https://github.com/moloch291");
        lightSaberHit_3();
    }

    render() {
        return (
            <div className="socialMediaContainer">
                <ul>
                    <li>
                        <i className="fab fa-facebook-f"
                           onMouseEnter={lightSaberActivation_1}
                           onClick={this.facebookEvent}/>
                    </li>
                    <li>
                        <i className="fab fa-linkedin-in"
                           onMouseEnter={lightSaberActivation_2}
                           onClick={this.linkedInEvent}/>
                    </li>
                    <li>
                        <i className="fab fa-github"
                           aria-hidden={'true'}
                           onMouseEnter={lightSaberActivation_3}
                           onClick={this.githubEvent}/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SocialMediaButtons;