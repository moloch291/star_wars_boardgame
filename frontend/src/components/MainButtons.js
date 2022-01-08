import {Component} from "react";

class MainButtons extends Component{

    render() {
        return (
            <div className="mainButtons">
                <button className="glow-on-hover"
                        id="login"
                        onClick={this.props.setLogin}>Log in!
                </button>
                <button className="glow-on-hover"
                        id="registration"
                        onClick={this.props.setRegistration}>Registration!
                </button>
            </div>
        );
    }
}

export default MainButtons;