import React from 'react'
import { Link } from "react-router-dom";

import './Chakras.scss';
import chakrasImg from '../../assets/images/sevenchakras.png';
import crownImg from '../../assets/images/crown.png';
import browImg from '../../assets/images/brow.png';
import throatImg from '../../assets/images/throat.png';
import heartImg from '../../assets/images/heart.png';
import solarImg from '../../assets/images/solar.png';
import sacralImg from '../../assets/images/sacral.png';
import rootImg from '../../assets/images/root.png';


function Chakras() {
    return (
        <div className="">
            {/* conditionally render user name */}
            <h3 className="loggedinuser">Welcome _username_!</h3>
            
            <div className="chakraspage">
                <img className="chakrasimage" src={chakrasImg} alt="seven chakras"/>

                <div className="chakrasnames">
                    <h3 className="linksheading">Click on a chakra below to meditate or learn more</h3>
                    
                    <Link to={"/chakra/7"}>
                        <div className="imglabeldiv">
                            <img className="crownimage chakra" src={crownImg} alt="crown chakra"/>
                            <p className="chakralabel">chakra 7 - Crown chakra</p>
                        </div>
                    </Link>

                    <div className="imglabeldiv">
                        <img className="browimage chakra" src={browImg} alt="brow chakra"/>
                        <p className="chakralabel">chakra 6 - Brow chakra</p>
                    </div>
                    <div className="imglabeldiv">
                        <img className="throatimage chakra" src={throatImg} alt="throat chakra"/>    
                        <p className="chakralabel">chakra 5 - Throat chakra</p>
                    </div>
                    <div className="imglabeldiv">
                        <img className="heartimage chakra" src={heartImg} alt="heart chakra"/>    
                        <p className="chakralabel">chakra 4 - Heart chakra</p>
                    </div>
                    <div className="imglabeldiv">
                        <img className="solarimage chakra" src={solarImg} alt="solar chakra"/>
                        <p className="chakralabel">chakra 3 - Solar chakra</p>
                    </div>
                    <div className="imglabeldiv">
                        <img className="sacralimage chakra" src={sacralImg} alt="sacral chakra"/>
                        <p className="chakralabel">chakra 2 - Sacral chakra</p>
                    </div>
                    <div className="imglabeldiv">
                        <img className="roottimage chakra" src={rootImg} alt="root chakra"/>
                        <p className="chakralabel">chakra 1 - Root chakra</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chakras
