import React, { useState } from "react";
import "./style.css";
import blindsOpen from "./images/blinds-open.svg"
import blindsClosed from "./images/blinds-closed.svg"

const Blinds = ({ state }) => {
    const [blindsState, setBlindsState] = useState(state)
    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={(blindsState == "open") ? blindsOpen : blindsClosed} />
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button className={(blindsState == "open") ? "button button--active" : "button"}
                    onClick={() => { (blindsState == "closed") && setBlindsState('open') }}
                >
                    Otevřeno
                </button>
                <button className={(blindsState == "closed") ? "button button--active" : "button"}
                    onClick={() => { (blindsState == "open") && setBlindsState('closed') }}
                >
                    Zavřeno
                </button>
            </div>
        </div >
    )
};

export default Blinds;