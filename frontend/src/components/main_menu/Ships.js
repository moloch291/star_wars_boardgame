import "../../css/menu/xWing.css"
import {useEffect, useState} from "react";

const Ships = () => {
    const [xWingState, setXWingState] = useState("active");
    const [starDestroyerState, setStarDestroyerState] = useState("active");

//######################################################################################################################
    // starDestroyer effects:
//######################################################################################################################



//######################################################################################################################
    // xWing effects:

    useEffect(() => {
        setTimeout(() => {
            setXWingState("inactive");
        }, 20000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".xWingContainer")
                .setAttribute("style", "bottom: 55%;");
        }, 8000);
    }, []);

//######################################################################################################################

    return (
        <div>
            <div className={"xWingContainer " + xWingState}>
                <div className="xWing"/>
            </div>
            <div className={"starDestroyerContainer " + starDestroyerState}>
                <div className="starDestroyer"/>
            </div>
        </div>
    );
};

export default Ships;