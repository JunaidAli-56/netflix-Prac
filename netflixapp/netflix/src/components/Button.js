import React from 'react'

export default function Button(props) {
    const { text, type } = props
    return (
        <>
            <button className={`btn btn-${type ? type : "primary"} me-1`}>{text ? text : "Default Button"}</button>
        </>
    )
}
