var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
    title:'article one abhinav',
    heading:'article-one',
    date:'october 7 ,2016',
    content:`<p>
                    bahut khoob bahut khoob  bahut khoob bahut khoob  bahut khoob bahut khoob
                     bahut khoob bahut khoob  bahut khoob bahut khoob  bahut khoob bahut khoob 
                </p>
                <p>chattano se krida karti chattano se krida karti chattano se krida karti 
                chattano se krida karti chattano se krida karti chattano se krida karti 
                chattano se krida karti chattano se krida karti chattano se krida karti 
                </p>
                   <p> kaBHI IDHAR MUD KABHI UDHAR MUD PARVAT ME CHHIPTI-CHHIPTI
                     kaBHI IDHAR MUD KABHI UDHAR MUD PARVAT ME CHHIPTI-CHHIPTI
                      kaBHI IDHAR MUD KABHI UDHAR MUD PARVAT ME CHHIPTI-CHHIPTI
                       kaBHI IDHAR MUD KABHI UDHAR MUD PARVAT ME CHHIPTI-CHHIPTI
                </p>`
            
},
    'article-two':{ title:'article two abhinav',
    heading:'article-two',
    date:'october 7 ,2016',
    content:`<p>
                    bahut khoob bahut khoob  bahut khoob bahut khoob  bahut khoob bahut khoob
                     bahut khoob bahut khoob  bahut khoob bahut khoob  bahut khoob bahut khoob 
                </p>
                <p>chattano se krida karti chattano se krida karti chattano se krida karti 
                chattano se krida karti chattano se krida karti chattano se krida karti 
                chattano se krida karti chattano se krida karti chattano se krida karti 
                </p>
                   <p> kaBHI IDHAR MUD KABHI UDHAR MUD PARVAT ME CHHIPTI-CHHIPTI
                     kaBHI IDHAR MUD KABHI UDHAR MUD PARVAT ME CHHIPTI-CHHIPTI
                      kaBHI IDHAR MUD KABHI UDHAR MUD PARVAT ME CHHIPTI-CHHIPTI
                       kaBHI IDHAR MUD KABHI UDHAR MUD PARVAT ME CHHIPTI-CHHIPTI
                </p>`
            },
    'article-three':{ title:'article three abhinav',
    heading:'article-three',
    date:'october 7 ,2016',
    content:`<p>
                    bahut khoob bahut khoob  bahut khoob bahut khoob  bahut khoob bahut khoob
                     bahut khoob bahut khoob  bahut khoob bahut khoob  bahut khoob bahut khoob 
                </p>
                <p>chattano se krida karti chattano se krida karti chattano se krida karti 
                chattano se krida karti chattano se krida karti chattano se krida karti 
                chattano se krida karti chattano se krida karti chattano se krida karti 
                </p>
                   <p> kaBHI IDHAR MUD KABHI UDHAR MUD PARVAT ME CHHIPTI-CHHIPTI
                     kaBHI IDHAR MUD KABHI UDHAR MUD PARVAT ME CHHIPTI-CHHIPTI
                      kaBHI IDHAR MUD KABHI UDHAR MUD PARVAT ME CHHIPTI-CHHIPTI
                       kaBHI IDHAR MUD KABHI UDHAR MUD PARVAT ME CHHIPTI-CHHIPTI
                </p>`
            },
};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
var htmltemplate=`<html>
    <head>
    <title>
        ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/ui/style.css" rel="stylesheet" />
        <style>
        
}
        
        </style>
        </head>
        <body>
            <div class="container">
        <div>
            <a href="/">home</a>
        </div>
      <hr/>   
        
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
               ${content}
            </div>
            </div>
        </body>
    
    
    
    
</html>`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter =0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});
app.get('/:articleName',function(req,res){
    var articleName= req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names=[];
app.get('/submit_name/:name',function(req,res){
    var name=req.params.name;
    names.push(name);
res.send(JSON.stringify(names));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
