import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Viewprogress.scss';
import '../TimeStamp';

import backIcon from '../../assets/icons/left-arrow.png';
import deleteIcon from '../../assets/icons/delete-icon.svg';
import editIcon from '../../assets/icons/edit-icon.svg';
import TimeStamp from '../TimeStamp';

const apiUrl = "http://localhost:8080";

class Viewprogress extends Component {
    state={
        notes: []
    }
    
componentDidMount(){
    // console.log("Viewprogress mount");
    if(sessionStorage.authToken){
        const token = sessionStorage.getItem("authToken");
        this.getUserNotes("1", token);
        // console.log(token);
    }

}
    getUserNotes = (id,token) => {

            axios
            .get(`${apiUrl}/notes/${id}`,{headers: {'Authorization': `Basic ${token}`}})
            // .get(`${apiUrl}/notes/${id}`)
            .then((response) => {
            //   console.log(response)
            //   console.log(response.data);   
              this.setState({
                  notes:response.data
              });   
            })
            .catch((error) => console.log(error));
        }

    render(){

        return (
            <div>
                    <div className="progress__pagetitle">
                        <Link to={"/"}>
                            <img className="backicon" src={backIcon} alt="back icon"/>
                        </Link>
                        <h2 className="progress__pageheading">View Progress</h2>
                    </div>
                <div className="container">
                    <div className="c-viewprogress">
                        <div className="viewprogress__grid progress__labels">
                            <p>DATE</p>
                            <p>CHAKRA</p>
                            <p>NOTE</p>
                            <p>ACTIONS</p>
                        </div>
                        {this.state.notes 
                        .map((notes) => (
                            <li className="c-viewprogress__li" key={notes.noteid}>
                                <div><TimeStamp tmstamp={notes.timestamp} /></div>
                                <p>{notes.chakra}</p>
                                <p>{notes.Note}</p>
                                <div className="action__icons">
                                    <img src={editIcon} alt="edit icon"/>
                                    <img src={deleteIcon} alt="delete icon"/>
                                </div>
                            </li>
                        ))}
                        {/* <Noteslist 
                            notes={this.state.notes}/> */}
                        {/* <p>View progress component</p> */}
                        {/* map returned array to display on the page */}
                    </div>
                </div>
            </div>
            )
        }
}

export default Viewprogress
