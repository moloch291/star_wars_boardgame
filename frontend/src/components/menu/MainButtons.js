import {Component} from "react";

import {
    playXWingEffect, xWingFire,
    tieFighterEffect, tieFighterFire
} from "../audio/AudioPlayer";

class MainButtons extends Component{

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.visible !== prevProps.visible) {
            this.setState({
                visible: this.props.visible
            });
        }
    }

    render() {
        if (this.state.visible === true) {
            return (
                <div className="mainButtonContainer">
                    <button className="glow-on-hover"
                            id="login"
                            onMouseEnter={playXWingEffect}
                            onClick={() => {
                                xWingFire();
                                this.props.setLogin();
                            }}>Log in
                    </button>
                    <button className="glow-on-hover"
                            id="registration"
                            onMouseEnter={tieFighterEffect}
                            onClick={() => {
                                tieFighterFire();
                                this.props.setRegistration();
                            }}>Registration
                    </button>
                </div>
            );
        }
        return (<div/>);
    }
}

export default MainButtons;