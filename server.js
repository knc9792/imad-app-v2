var express = require('express');
var morgan = require('morgan');
var path = require('path');


var articles={
    
articleOne:{
    title:"Article-One |Chaitanya",
    date:" Feb 14th 2017",
    heading:"ArticleOne",
    content:` <p>This is article one </p>
                <p>This is article one </p>
                <p>This is article one </p>
                <p>This is article one </p>
                <p>This is article one </p>`
                
},
articleTwo:{
    title:"Article-One |Chaitanya",
    date:" Feb 14th 2017",
    heading:"ArticleOne",
    content:` <p>This is second article </p>
                `
                
},
articleThree:{
    title:"Article-One |Chaitanya",
    date:" Feb 14th 2017",
    heading:"ArticleOne",
    content:` <p>This is article three </p>
                `
                
}
};
function createTemplate(data){
    
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var date = data.date;
var htmlTemplate=`<html>
    <head>
        <title> ${title}</title>
        <meta name="viewport" content="width=device-width initial-scale=1">
    <style>
        .container{
            max-width:800px;
            
        }
    </style>
    </head>
    
    <body>
        <div class="container">
            <div>
            <a href="/">Home</a>
            </div>
            <hr/>
            <h3>${heading}</h3>
            <div>
               ${date}
            </div>
            <div>
              ${content}
            </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
} 


var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/:articleName', function (req, res) {
    var articleName= req.params.articleName;
 res.send(createTemplate(articleName));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
