import React, { useState } from "react";

export default function Form() {

    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        number: "",
    })

    const inputEvent = (event) => {
        setFullName(event.target.value)

        const { name, value } = event.target;

        setFullName((preVal) => {
            console.log(preVal)
            return {
                ...preVal,
                [name]: value,
            }
            // if (name === "fName") {
            //     return {
            //         fname: value,
            //         lname: preVal.lname,
            //         email: preVal.email,
            //         number: preVal.number,
            //     }
            // } else if (name === "lName") {
            //     return {
            //         fname: preVal.fname,
            //         lname: value,
            //         email: preVal.email,
            //         number: preVal.number,
            //     }
            // } else if (name === "eMail") {
            //     return {
            //         fname: preVal.fname,
            //         lname: preVal.lname,
            //         email: value,
            //         number: preVal.number,
            //     }
            // } else if (name === "nUmber") {
            //     return {
            //         fname: preVal.fname,
            //         lname: preVal.lname,
            //         email: preVal.email,
            //         number: value,   
            //     }
            // }
        })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        alert('Form Submitted')
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-4 text-center my-5">
                    <h1 className="text-danger">Form</h1>
                    <div className="card">
                        <h2 className="py-2">Hello {fullName.fname} {fullName.lname}</h2>
                        <p>{fullName.email}</p>
                        <p>{fullName.number}</p>
                        <form onSubmit={onSubmit}>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name..."
                                    name='fName' onChange={inputEvent}
                                    value={fullName.fname}
                                />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Last Name..."
                                    name='lName' onChange={inputEvent}
                                    value={fullName.lname}
                                />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email..."
                                    name='eMail' onChange={inputEvent}
                                    value={fullName.email}
                                />
                            </div>
                            <div className="mb-3">
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Number..."
                                    name='nUmber' onChange={inputEvent}
                                    value={fullName.number}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}
