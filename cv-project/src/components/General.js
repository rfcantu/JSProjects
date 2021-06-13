import React from "react";

const General = (props) => {
    const { genInfo } = props;

    return (
        <ul>
            {genInfo.map((generalInfo) => {
                return <li key={generalInfo.id}>{generalInfo.name} {generalInfo.email} {generalInfo.phone}</li>;
            })}
        </ul>
    )
}

export default General;