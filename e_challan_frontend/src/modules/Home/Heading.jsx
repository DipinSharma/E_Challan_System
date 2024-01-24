import React from "react";

const Heading = (props) => {
    return (
        <div className={props.className}>
            <h2>{props.heading1}</h2>
            <div className={`${props.className}Panel`}>
                <h4>{props.heading2}</h4>
                <div className={`${props.className}Buttons`}>
                    {props.button1 && <button>{props.button1}</button>}
                    {props.button2 && <button>{props.button2}</button>}
                </div>
            </div>
        </div>
    )
}
export default Heading