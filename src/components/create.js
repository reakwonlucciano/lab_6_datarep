// imports react
import React from "react";
import axios from "axios";  //talks http

// class for the create component// extends and export word used to export app.js
export class Create extends React.Component {
    
      // form

    constructor(){
        super();
        
        // must bind
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.state = {
            title:'',
            cover:'',
            author:''
        }
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.title},
        ${this.state.cover},
        ${this.state.author}`);
        
        const book = {
         //object that sends data
            
            title:this.state.title,
            cover:this.state.cover,
            author:this.state.author
        }
        
  // sends to the server the url with the object and data it has, app.post in the server is then invoked

axios.post('http://localhost:4000/api/books',book)
.then()
.catch();

        this.setState({
            title:'',
            cover:'',
            author:''
        })
    }
    
// constructor

    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    onChangeBookCover(e){
        this.setState({
            cover:e.target.value
        })
    }
    onChangeBookAuthor(e){
        this.setState({
            author:e.target.value
        })
    }

    render() {
        
           // returning component

        return (
            <div>
                <h3>Hello from Create Component!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>

                    <input type="submit" value="Add Book" />
                </form>
            </div>
        ); //return
    } //render
} //class
