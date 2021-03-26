import React from 'react';
import { Link } from "react-router-dom";

import Videoplayer from '../Videoplayer/Videoplayer';
import './Meditatechakra.scss';

import backIcon from '../../assets/icons/left-arrow.png';

class Meditatechakra extends React.Component{
    // console.log(props);
    // console.log(isClicked);
    state = {
        isClicked: 0,
        value: ''
    }

   handleToggleClick(){
       this.setState({isClicked: !this.state.isClicked})
       const x = document.getElementById("hide");
       if (x.style.display === "none") {
         x.style.display = "block";
       } else {
         x.style.display = "none";
       }
    }

    // text input handler
    handleChange =(event)=>{
        this.setState({value: event.target.value});
    }

    render(){
    return (
        <div className="meditatechakra">
            <div>
                <div className="medpagetitle">
                    <Link to={`/chakra/7`}>
                        <img className="backicon" src={backIcon} alt="back icon"/>
                    </Link>
                    <h3 className="pageheading">Meditate</h3>
                </div>
                    <h3 className="instructions">Instructions</h3>
                    <p className="instructions">Find a quiet, soft lit space for meditation</p>
                    <p className="instructions">Seated position is ideal, however may be done lying down</p>
                    <p className="instructions">Use earphones/ earbuds to get the best experience</p>
                    <p className="instructions">Once meditation is complete, click <span className="bold">Meditation Complete</span> to record your experience</p>
            </div>
            <div className="videoplayer">
                <Videoplayer
                    videoId={this.props.match.params.id}
                />
                <div className="cards">
                    <div className="completecard" id="hide">
                        <button className="cardbtn btn"  onClick={()=>this.handleToggleClick()}>Meditation Complete</button>
                    </div>
                    {this.state.isClicked ?  
                            <form className="experience">
                                <h4 className="experiencelabel">After meditation, I feel... </h4>
                                <textarea className="exptext" placeholder="Write how you feel here" 
                                    onChange={this.handleChange} 
                                    value={this.state.value} >
                                </textarea>
                                <div className="form__btns">
                                    <button className="form__btn btn cbtn">Cancel</button>
                                    <button className="form__btn btn">Save</button>
                                </div>
                            </form> 
                        : 
                        null
                        }         
                </div>
            </div>
        </div>
    );
    }
}

export default Meditatechakra
