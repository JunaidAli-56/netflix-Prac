import React from "react";

export default function SlotGame() {
    const Slots = (props) => {
        // Destructuring
        let { x, y, z } = props;
        if (x === y && y === z) {
            return (
                <>
                    <div class="card text-center my-2 bg-light">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">{x}, {y}, {z},</li>
                            <h6 className="text-success">This is Matching....</h6>
                        </ul>
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <div class="card text-center my-2 bg-warning">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">{x}, {y}, {z},</li>
                            <h6 className="text-danger">This is not Matching....</h6>
                        </ul>
                    </div>
                </>
            )
        }
    }
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-4">
                        <h1 className="text-center text-warning py-2">Slot Game</h1>
                        {<Slots x="smile" y="smile" z="smile" />}
                        {<Slots x="angry" y="angry" z="smile" />}
                        {<Slots x="angry" y="moody" z="smile" />}
                        {<Slots x="moody" y="moody" z="moody" />}\
                    </div>
                </div>
            </div>
        </>
    )
}
