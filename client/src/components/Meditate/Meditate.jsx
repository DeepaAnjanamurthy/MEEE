import React from 'react';
import { Link } from "react-router-dom";

import './Meditate.scss';
import backIcon from '../../assets/icons/left-arrow.png';
import crownImg from '../../assets/images/crown.png';

function Meditate(props) {
// console.log(props.match.params);

    return (
        <div>
            <div className="pagetitle">
                <Link to={"/welcome"}>
                    <img className="backicon" src={backIcon} alt="back icon"/>
                </Link>
                <h2 className="pageheading">Meditate</h2>
            </div>
            <div className="container">
                <div className="chakracard">
                    <h2 className="chakraheading">Crown Chakra</h2>
                    <img className="chakraimg" src={crownImg} alt="charka img"/>
                    <div className="chakrainfo">
                        <div>
                            <h2 className="chakralabels">Sanskrit Name</h2>
                            <p className="chakrapara">Sahasrara</p>
                        </div>
                        <div>
                            <h2 className="chakralabels">Element</h2>
                            <p className="chakrapara">Thought</p>
                        </div>
                        <div>
                            <h2 className="chakralabels">Function</h2>
                            <p className="chakrapara">Understanding</p>
                        </div>
                        <div>
                            <h2 className="chakralabels">Related Body Parts</h2>
                            <p className="chakrapara">Pituitary, Cerebral cortex, Central nervous system</p>
                        </div>
                        <div>
                            <h2 className="chakralabels">Malfunction</h2>
                            <p className="chakrapara">Depression, alienation, confusion, boredom, apathy, inability to learn or comprehend</p>
                        </div>
                    </div>
                </div>
                <div className="options">
                    <Link to={`/chakra/${props.match.params.id}/WMJ8ZyQuOxQ`}>
                        <div className="optioncard">
                            <h2>Meditate for 15 minutes</h2>
                        </div>
                    </Link>    
                    <Link to={`/chakra/${props.match.params.id}/Mrr4dK5Nja0`}>
                    <div className="optioncard">
                        <h2>Meditate for 30 minutes</h2>
                    </div>
                    </Link>
                    <div className="optioncard">
                        <h2>Meditate for 60 minutes</h2>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default Meditate
