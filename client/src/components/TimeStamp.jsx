import React from 'react';
// import './TimeStamp.scss';

function TimeStamp(props) {

    const newDate = new Date(props.tmstamp);
    const dispDate = newDate.toLocaleDateString();
    return (
        <p className="date-style">
            {dispDate}
        </p>
    )
}

export default TimeStamp
