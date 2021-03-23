import { Component } from 'react';
import axios from 'axios';

const apiUrl = "http://localhost:8080";

class Viewprogress extends Component {
    state={
        notes: []
    }
    
componentDidMount(){
    console.log("Viewprogress mount");
    if(sessionStorage.authToken){
        const token = sessionStorage.getItem("authToken");
        this.getUserNotes("1", token);
        console.log(token);
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

            <div className="viewprogress">
                <div>

                </div>
                {this.state.notes
                .map((notes) => (
                    <li key={notes.noteid}>
                        <p>{notes.Note}</p>
                        <p>{notes.timestamp}</p>
                        <p>{notes.chakra}</p>
                    </li>
                ))}
                {/* <Noteslist 
                    notes={this.state.notes}/> */}
                <p>View progress component</p>
                {/* map returned array to display on the page */}
            </div>
        )
    }
}

export default Viewprogress
