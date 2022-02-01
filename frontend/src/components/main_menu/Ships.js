import "../../css/menu/ships.css"
import {useEffect} from "react";

const Ships = () => {

    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".xWingContainer")
                .setAttribute("style", "bottom: 55%; height: 30px; animation-duration: 15s");
        }, 8000);
    }, []);

//######################################################################################################################

    return (
        <div>
            <div className={"xWingContainer active"}>
                <div className="xWing"/>
            </div>
            <div className={"starDestroyerContainer active"}>
                <div className="starDestroyer"/>
            </div>
        </div>
    );
};

export default Ships;