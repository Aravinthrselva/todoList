const express = require("express");
const port = 3000;
const app = express();
const date = require(__dirname + '/date.js');

app.set('view engine', 'ejs');                          // setting app's 'view engine'  to ejs -- there are many templating libraries , ejs is just one of em

app.use(express.urlencoded({extended : true}));         //express.urlencoded() function is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.static('public'));
let items = ['MongoDB', 'Node Js', 'React Js'];
let bookItems = [];



app.get('/', (req, res) => {
const day = date.getDate();
res.render('list', {listTitle: day, listItems: items});
})

app.post('/', function(req, res)  {

  let item = req.body.newItem;
  if(req.body.button === 'Books') {

    bookItems.push(item);
    res.redirect('/books');
  }
  else {
    items.push(item);
    res.redirect('/');
  }
})


app.get('/books', (req,res) => {
res.render('list', {listTitle: 'Books', listItems: bookItems})
})


app.get('/about', (req, res) => {
  res.render('about');
})

app.listen (port, function() {
  console.log("listening to port", port);
})
