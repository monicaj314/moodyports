var http = require("http");



var niceThings = ["You're pretty", "Thanks for being awesome :)", "You're kind of a big deal", "You have many leather-bound books"];
var meanThings = ["You smell weird", "Could you just not?", "Your mother dresses you funny", "Hate your hair", "Go away, you bore"];

// Port to listen on
var nicePort = 7000;
// A request came in 
function beNice(request, response) {
	var x = Math.floor(Math.random() * niceThings.length - 1);
    response.end(niceThings[x]);
};
var niceServer = http.createServer(beNice);
niceServer.listen(nicePort, function() {
    console.log("Server listening on http://locahost%s", nicePort);
});

// Port to listen on
var meanPort = 7500;
// A request came in 
function beMean(request, response) {
	var y = Math.floor(Math.random() * meanThings.length - 1);
    response.end(meanThings[y]);
}
var meanServer = http.createServer(beMean);
meanServer.listen(meanPort, function() {
    console.log("Server listening on http://locahost%s", meanPort);
})