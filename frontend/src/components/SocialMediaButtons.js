import {Component} from "react";
import AudioHandler from "./AudioHandler";

class SocialMediaButtons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            soundBank: <AudioHandler/>
        }
    }

    render() {
        return (
            <ul>
                <li>
                    <i className="fab fa-facebook-f"/>
                </li>
                <li>
                    <i className="fab fa-linkedin-in"/>
                </li>
                <li>
                    <i className="fab fa-github" aria-hidden={'true'}/>
                </li>
            </ul>
        );
    }
}

export default SocialMediaButtons;