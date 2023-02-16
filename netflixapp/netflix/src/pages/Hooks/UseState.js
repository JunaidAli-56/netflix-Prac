import React, { useState } from "react";

function UseState() {
    // array destrucuring
    // in useSate " [currVal ,updatedVal or updateFunction] =intitialVal() "
    const [count, setCount] = useState(0);

    const IncNum = () => {
        setCount(count + 1)
    }
    const DecNum = () => {
        // setCount(count - 1)
        (count <= 0) ? setCount(0) : setCount(count - 1);
    }
    const ResNum = () => {
        setCount(0)
    }

    // for Time

    let newTime = new Date().toLocaleTimeString();
    const [currTime, setCurrTime] = useState(newTime);

    const UpdateTime = () => {
        let newlyTime = new Date().toLocaleTimeString();
        setCurrTime(newlyTime);
    }
    // for digital time

    let new2Time = new Date().toLocaleTimeString();
    const [curr2Time, setCurr2Time] = useState(new2Time);

    const UpdatedTime = () => {
        let newlyTime = new Date().toLocaleTimeString();
        setCurr2Time(newlyTime);
    }
    setInterval(UpdateTime, 1000)

    return (
        <>
            <div className="container">
                <div className="row card-row justify-content-center align-items-center">
                    <h1 className="text-center text-warning">useState</h1>
                    <div className="col-3">
                        <div className="card">
                            <h1 className="text-center">{count}</h1>
                            <div className="inc-div py-1">
                                <button className="btn btn-warning" onClick={IncNum}>Increment</button>
                                <button className="btn btn-warning" onClick={DecNum}>Decrement</button>
                            </div>
                            <button className="btn btn-warning" onClick={ResNum}>Reset</button>
                        </div>
                    </div>

                    {/* for get Time. */}
                    <div className="col-3">
                        <div className="card">
                            <h2 className="text-center text-danger">Time</h2>
                            <h1 className="text-center">{curr2Time}</h1>
                            <button className="btn btn-warning" onClick={UpdateTime}>Get Time</button>
                        </div>
                    </div>

                    {/* for Digital Time */}
                    <div className="col-3">
                        <div className="card">
                            <h2 className="text-center text-danger">Digital Time</h2>
                            <h1 className="text-center">{currTime}</h1>
                            <div className="btn btn-warning" onClick={UpdatedTime}><i class="bi bi-alarm fw-bolder"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UseState;
