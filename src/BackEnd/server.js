const express = require('express') // this is new body parser included in express
const app = express()
const port = 4000

const cors = require('cors'); // getting cors
const bodyParser = require('body-parser');

// server 

// this included to avoid cors error

// this is used as a bodyparser now with new update 

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// api for hello world to get method that sends json back to the client when invoked
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// when data gets passed up this logs it into console
app.post('/api/books', (req, res)=> {
    console.log(req.body);  // pulls this middleware
   res.send ('Data Recieved');
})


// api for books to get method that sends json back to the client when invoked
app.get('/api/books', (req,res)=>{
  
   // json books hardcoded
    const books = [             
            {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg", "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
            },
            {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
            "Kyle Banker",
            "Peter Bakkum",
            "Tim Hawkins",
            "Shaun Verch",
            "Douglas Garrett"
            ],
            "categories": []
        
            },
            {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": ["Simon Holmes"],
            "categories": []
            }
            ]
     // json pass down to server (response)
    res.json({
        myBooks:books

    })
})

// listen port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
