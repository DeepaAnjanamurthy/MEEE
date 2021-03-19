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
                    <h3>Instructions</h3>
                </div>
                <p>Steps 1</p>
                <p>Steps 2</p>
                <p>Steps 3</p>
                <p></p>
            </div>
            <div className="videoplayer">
                <Videoplayer
                    videoId={this.props.match.params.id}
                />
                <div className="cards">
                    <div className="completecard">
                        <button className="cardbtn" onClick={()=>this.handleToggleClick()}>Meditation Complete</button>
                    </div>
                    {this.state.isClicked ?  
                            <form className="experience">
                                <h4 className="experiencelabel">After meditation, I feel... </h4>
                                <textarea className="exptext" placeholder="Write how you feel here" 
                                    onChange={this.handleChange} 
                                    value={this.state.value} >
                                </textarea>
                                <div className="form__btns">
                                    <button className="form__btn cbtn">Cancel</button>
                                    <button className="form__btn">Save</button>
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
