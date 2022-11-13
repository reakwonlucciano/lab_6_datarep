// imports react
import React from "react";
import Card from 'react-bootstrap/Card';

// class for the BookItem component// extends and export word used to export app.js
export class BookItem extends React.Component {
    
      // returning component

        // returns the format of the book data back to the "book" class, which in turn sends it back to the "read" class
    
    render() {
        return (
            <div>
                {/* <h4>{this.props.book.title}</h4>
        <img src={this.props.book.thumbnailUrl}></img>
                <h6>{this.props.book.authors[0]}</h6> */}

                <Card>
            <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
       <blockquote className="blockquote mb-0">
            <img src={this.props.book.thumbnailUrl}></img>
            <footer >
                {this.props.book.authors[0]}
                    </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
