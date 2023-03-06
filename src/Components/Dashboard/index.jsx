import React from "react";
import Blinds from "../Blinds";
import Climate from "../Climate";
import Energy from "../Energy";
import Lights from "../Lights";
import "./style.css";

const Dashboard = (data) => {
    console.log(data)
    return (
        <main className="dashboard">
            <Lights data={data} />
            <Climate temperature={data.data.climate.temperature} humidity={data.data.climate.humidity} />
            <Blinds state={data.data.blinds} />
            <Energy electricity={data.data.energyConsumption.electricity} water={data.data.energyConsumption.water} />
        </main>
    )
};

export default Dashboard;