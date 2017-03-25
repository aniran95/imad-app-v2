var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Article_one = {
    title : 'Article-one',
    heading : 'The first Article',
    date : 'Sep 5, 2016',
};
function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var content1 = data.content1;
    var content2 = data.content2;
var htmlTemplate = "   <html> \
   \
   <head> 
       <title>  \
           $(title) \  
       </title> \
       <meta name = "viewport" content = "width = device-width, initial-scale = 1"/> \
       <link href="/ui/style.css" rel="stylesheet" /> \
       </head> \
   <body>
       <div>
       <div>
           <h1>
               $(heading)
           </h1>
           <a href = '/'>home</a>
       </div> 
       <div>
       <div>
           <p>
               $(content1)
           </p>        
       </div>
       </div>
       <div> 
           <p>
               $(content2)
           </p> \         
       </div> \ 
         \ 
       </div>   
   </body> \
      \
</html> " 
return htmlTemplate;
    
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(Article_one));
});

app.get('/article2',function(req,res){
    res.send('Article 2 requested and will be served here');
}
);
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
