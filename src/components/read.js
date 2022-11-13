// imports react
import React from "react";
import { Books } from "./books";// imports books component and used down below <books>
import axios from "axios"; // for json to ask for info asynchronous

// class for the read component// extends word used to export app.js
export class Read extends React.Component{
    

    componentDidMount() {
         // get the json blob, ***from local host server now (lab6)
        
        axios.get('http://localhost:4000/api/books')
        
          // then set the respons onto the state movie array and that will display
        
        .then((response)=>{
            this.setState({books:response.myBooks})
        })
        
          // shows what error if something goes wrong
        .catch((error)=>{
            console.log(error);
        })
    } // didmount

     // state to store data in this class
    state = {
        
        // books holding json data about 3 books.

        books:[ ]
    }
    
    render(){
        / returning component

        // books data in read component, have <books> here that connects the two components
        // with the "<books books ={this.state.books}> " sends the data in the read component (state) and send it to
        // the books class/component where it sends back the formatted books data from the booksItem component that's inbeeded in it and sent back to the read component which has a page on the website
        // that will show the books data that was formatted and sent back

        return(
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books}></Books>
            </div>
        ); //return
    } //class
} //render
