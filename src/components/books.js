// imports react
import React from "react";
import { BookItem } from "./bookItem"; //book item import 

// class for the book component// extends and export word used to export app.js
export class Books extends React.Component{

    render(){
        
        // returning component

        //splits BookItem into 3 items because map() and 3 sets of data
        // book now holds 3 seprate BookItem's

        // "book = {book}"" passes the book data colllection to BookItem class, that the "book" variable from 
        //" return this.props.books.map( (book)=>" got
        
        return this.props.books.map(
        (book)=>{
            return <BookItem book={book} key={book.isbn}></BookItem>
        }
        )
    } // render
} //class
