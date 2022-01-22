import "../../css/menu/ships.css"
import {useEffect, useState} from "react";

const Ships = () => {
    const [xWingState, setXWingState] = useState("active");
    const [starDestroyerState, setStarDestroyerState] = useState("active");
    const [interceptorState, setInterceptorState] = useState("active");

//######################################################################################################################
    // starDestroyer effects:
//######################################################################################################################



//######################################################################################################################
    // xWing effects:

    useEffect(() => {
        setTimeout(() => {
            setXWingState("inactive");
        }, 40000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".xWingContainer")
                .setAttribute(
                    "style", "bottom: 55%; height: 30px; animation-duration: 30s"
                );
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
            <div className={"interceptorContainer " + interceptorState}>
                <div className="interceptor"/>
            </div>
        </div>
    );
};

export default Ships;