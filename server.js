var express = require("express");
var app = express()

//  First Hello world will condsoled Next next call back will be consoled
app.get('/', function(req, res, next) {
    console.log('hello world');
    // res.send('hello world Express')
    next()
}, function(req, res) {
    console.log('came in next')
    res.send('next callback')
})
// Multiple Call Backs

var cb0 = function(req, res, next) {
    console.log('came in cb0');
    next()
};
var cb1 = function(req, res, next) {
    console.log('came in cb1');
    next()
}
app.get('/multipleCalls', [cb0, cb1], function(req, res) {
    console.log('after cb1 and cb2');
    res.send('after cb1 and cb2')
})

// routes

app.route('/books').get(function(req, res) {
    res.send('Get a Random book')
}).post(function(req, res) {
    res.send('add a book')
}).put(function(req,res){
	res.send('update book')
})

app.listen(3000, () => {
    console.log('listiening on port 3000')
})