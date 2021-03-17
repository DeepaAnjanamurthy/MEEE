import React from 'react';
import Videoplayer from '../Videoplayer/Videoplayer';
import './Meditate.scss';

function Meditatechakra(props) {
    return (
        <div>
            <div>
                <h3>Instructions</h3>
                <p></p>
            </div>
            <div>
                <Videoplayer
                videoId={props.match.params.id}/>
            </div>

            <div className="completecard">
                <button className="cardbtn">Meditation Complete</button>
            </div>
            <div className="progresscard">
                <button className="cardbtn">View my progress</button>
            </div>

            <form className="experience">

            </form>
        </div>
    )
}

export default Meditatechakra
