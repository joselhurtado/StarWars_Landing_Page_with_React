import React, { useState, useEffect } from "react";
import People_0 from "/src/img/vehicles/Vehicles_0.jpeg";

export default function VehicleCard() {
    return (
        <div className="card m-2" style={{width: "18rem"}}>
            <img src={People_0} className="card-img-top" alt="card Image" />
                <div className="card-body">
                    <h5 className="card-title">Title Characters</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" className="btn btn-outline-success">Go somewhere</a>
                </div>
        </div>
    );
}
