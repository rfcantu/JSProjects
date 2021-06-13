import React from "react";

const Education = (props) => {
    const { edInfo } = props;

    return (
        <ul>
            {edInfo.map((educationInfo) => {
                return <li key={educationInfo.id}>{educationInfo.school} {educationInfo.major} {educationInfo.grad}</li>;
            })}
        </ul>
    )
}

export default Education;