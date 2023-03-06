import React from "react";
import "./style.css"
import Light from "../Light/index.jsx"

const Lights = ({ data }) => {
    return (
        <div className="lights">
            {
                data.data.lights.map((light) => {
                    return (
                        <Light key={light.name} name={light.name} state={light.state} />
                    )
                })

            }
        </div>
    )
};

export default Lights;