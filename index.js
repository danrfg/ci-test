var algoliasearch = require('algoliasearch')
//var algoliasearch = require('algoliasearch/reactnative');
//var algoliasearch = require('algoliasearch/lite');
// or just use algoliasearch if you are using a <script> tag
// if you are using AMD module loader, algoliasearch will not be defined in window,
// but in the AMD modules of the page

var client = algoliasearch('SD1HPVPWB3', 'b2a74a4b1d0b22a88aa439b6986e3ba7')
var index = client.initIndex('getstarted_actors')

var express = require('express')
var app = express()

app.get('/', function (req, res) {
    index.search("Ben", (err, res2) =>
    {
        res.send('result: '+res2.nbHits);
    })    
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})