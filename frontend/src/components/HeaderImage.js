import logo from "../img/_swLogo2.png";
import React from "react";


class HeaderImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible
        };
    }

    render() {
        return (
            <header className="MainMenu-header">
                <img src={logo} className="menu-logo" alt="logo"/>
            </header>
        );
    }
}

export default HeaderImage;