import {Component} from "react";

import {
    lightSaberActivation_1, lightSaberActivation_2, lightSaberActivation_3,
    lightSaberHit_1, lightSaberHit_2, lightSaberHit_3
} from "../audio/AudioPlayer";

class SocialMediaButtons extends Component {

    facebookEvent() {
        window.open("");
        lightSaberHit_1();
    }

    linkedInEvent() {
        window.open("");
        lightSaberHit_2();
    }

    githubEvent() {
        window.open("");
        lightSaberHit_3();
    }

    render() {
        return (
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
        );
    }
}

export default SocialMediaButtons;