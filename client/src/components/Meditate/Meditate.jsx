import React from 'react';
import { Link } from 'react-router-dom';

import './Meditate.scss';
import backIcon from '../../assets/icons/left-arrow.png';
// import crownImg from '../../assets/images/crown.png';

import axios from 'axios';

class Meditate extends React.Component {

    state={
        content:[],
    }
// console.log(props.match.params);

getChakraInfo = () => {
    axios
    .get(`http://localhost:8080/chakras/${this.props.match.params.id}`)
    .then((response) => {
    //   console.log(response.data);
      this.setState({
        content: response.data
      });
    })
    .catch((error) => console.log(error));
  }

  componentDidMount(){
      this.getChakraInfo();
  }

render(){
    console.log(this.state.content);
    return (
        <div>
            <div className="pagetitle">
                <Link to={"/welcome"}>
                    <img className="backicon" src={backIcon} alt="back icon"/>
                </Link>
                <h2 className="pageheading">Options</h2>
            </div>
            <div className="container">
                <div className="chakracard card">
                    <div className="card-side front">
                        <h2 className="chakraheading">{this.state.content.name}</h2>
                        {/* <img className="chakraimg" src={crownImg} alt="charka img" /> */}
                        {/* How to serve static images from images.json in server side */}
                        {/* https://expressjs.com/en/starter/static-files.html */}
                        <img className="chakraimg" alt="charka img" src={this.state.content.image} />
                        <p className="clickformore">click here to learn more</p>
                    </div>
                    <div className="chakrainfo card-side back">
                        <div>
                            <h2 className="chakralabels">Sanskrit Name</h2>
                            <p className="chakrapara">{this.state.content.sanskritname}</p>
                        </div>
                        <div>
                            <h2 className="chakralabels">Element</h2>
                            <p className="chakrapara">{this.state.content.element}</p>
                        </div>
                        <div>
                            <h2 className="chakralabels">Function</h2>
                            <p className="chakrapara">{this.state.content.function}</p>
                        </div>
                        <div>
                            <h2 className="chakralabels">Related Body Parts</h2>
                            <p className="chakrapara">{this.state.content.bodyparts}</p>
                        </div>
                        <div>
                            <h2 className="chakralabels">Malfunction</h2>
                            <p className="chakrapara">{this.state.content.malfunction}</p>
                        </div>
                    </div>
                </div>
                <div className="options">
                    <Link className="linkchakra" to={`/meditatechakra/${this.props.match.params.id}/WMJ8ZyQuOxQ`}>
                      {/* <Link to={`/meditatechakra/${this.props.match.params.id}/${this.state.content.videoids.15min}`}> */}
                      {/* <Link to={`/meditatechakra/7/WMJ8ZyQuOxQ`}> */}
                        <div className="optioncard">
                            <h2>Meditate for 15 minutes</h2>
                        </div>
                    </Link>    
                    <Link className="linkchakra" to={`/meditatechakra/${this.props.match.params.id}/Mrr4dK5Nja0`}>
                        <div className="optioncard">
                            <h2>Meditate for 30 minutes</h2>
                        </div>
                    </Link>

                    <Link className="linkchakra" to={`/meditatechakra/${this.props.match.params.id}/vq4TZexuG9Y`}>
                        <div className="optioncard">
                            <h2>Meditate for 60 minutes</h2>
                        </div>
                    </Link>
            </div>
            </div>
        </div>
    )
    }
}

export default Meditate
