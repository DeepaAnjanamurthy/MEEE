import React from 'react';
import { Link } from "react-router-dom";

import Videoplayer from '../Videoplayer/Videoplayer';
import './Meditatechakra.scss';

import backIcon from '../../assets/icons/left-arrow.png';

function Meditatechakra(props) {
    // console.log(props);
    const isClicked = 0;
    // console.log(isClicked);

    // handleToggleClick =() =>{
    //     isClicked = 1;
    //     console.log(isClicked);
    // }
    return (
        <div className="meditatechakra">
            <div>
                <div className="medpagetitle">
                    <Link to={`/chakra/7`}>
                        <img className="backicon" src={backIcon} alt="back icon"/>
                    </Link>
                    <h3>Instructions</h3>
                </div>
                <p>Steps 1</p>
                <p>Steps 2</p>
                <p>Steps 3</p>
                <p></p>
            </div>
            <div className="videoplayer">
                <Videoplayer
                    videoId={props.match.params.id}
                />
                <div className="cards">
                    <div className="completecard">
                    <button className="cardbtn" >Meditation Complete
                        {/* <button className="cardbtn" onClick={handleToggleClick}>Meditation Complete */}
                        {isClicked 
                        ?  <form className="experience">
                                <h4 className="experiencelabel">After meditation, I feel... </h4>
                                <textarea className="exptext" placeholder="Write how you feel here" > </textarea>
                                <div className="form__btns">
                                    <button className="form__btn cbtn">Cancel</button>
                                    <button className="form__btn">Save</button>
                                </div>
                            </form> 
                        : <></>
                        } 
                        </button>
                    </div>
                    
                    {/* <form className="experience">
                    <h4 className="experiencelabel">After meditation, I feel... </h4>
                            <textarea className="exptext" placeholder="Write how you feel here" > </textarea>
                            <div className="form__btns">
                                <button className="form__btn cbtn">Cancel</button>
                                <button className="form__btn">Save</button>
                            </div>
                    </form> */}
                </div>
            </div>
        </div>
    )
}

export default Meditatechakra
