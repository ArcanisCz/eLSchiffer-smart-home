import React, { useState } from "react";
import "./style.css"
import bulbOn from "./images/light-on.svg";
import bulbOff from "./images/light-off.svg";


const Light = ({ name, state }) => {
    const [stateState, setState] = useState(state)
    return (
        <div className="light" onClick={() => { (stateState == "on") ? setState("off") : setState("on") }} >
            <div className="light__icon">
                <img src={(stateState == "on") ? bulbOn : bulbOff} ></img>
            </div>
            <div className="light__name">
                {name}
            </div>
        </div >

    )
};

export default Light;