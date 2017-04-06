var express = require('express');
var app = express();
var fetch = require('node-fetch');

app.get('/demo', function (req, res) {
  console.log('demo');
  var url = 'https://jsonplaceholder.typicode.com/posts/1';
  fetch(url)
    .then(function(res) {
        return res.json();
    }).then(function(json) {
        console.log(json);
        res.send(json);
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
