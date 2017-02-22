// Open port on 4200
const PORT = process.env.PORT || 4200;

// Require Express
const express = require('express');
const app = express();

//require mustache
const mustache = require('mustache-express');
//configure mustache
app.engine('html',mustache());
app.set('view engine','html');
app.set('views',__dirname+'/public/views');
app.use(express.static(__dirname+"/public"));

// Port Test
app.listen(PORT, function(){
  console.log('App listening on: ' + PORT);
})

app.get('/', function(req, res){
  res.send('Hello World!')
})
