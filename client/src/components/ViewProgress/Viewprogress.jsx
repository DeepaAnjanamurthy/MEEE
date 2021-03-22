import { Component } from 'react';
import axios from 'axios';

const apiUrl = "http://localhost:8080";

class Viewprogress extends Component {
    state={
        notes: []
    }
    
componentDidMount(){
    this.getUserNotes("1");
}
    getUserNotes = (id) => {
        axios
        .get(`${apiUrl}/notes/${id}`)
        .then((response) => {
        //   console.log(response)
          console.log(response.data);   
          this.setState({
              notes:response.data
          });   
        })
        .catch((error) => console.log(error));
      }

    render(){

        return (

            <div>
                {this.state.notes
                .map((notes) => (
                    <li key={notes.id}>
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
