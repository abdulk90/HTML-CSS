var read = require('read');

var Question = function(text, answer, id) {
	this.text = text;
	this.answer = answer;
	this.id = id;
};

var Quiz = function(proceed) {
	this.proceed = proceed;
};

var Question0 = new Question("What is your name?","",0)
var Question1 = new Question("How many licks does it take to reach the center of a tootsie roll pop?", "the world may never know", 1);
var Question2 = new Question("When mixed together, what do red and blue make?", "purple", 2);
var Question3 = new Question("What is the answer to the Universe?", "42", 3);



function displayName (err, name) {
	console.log("Your name is: " + name)
}

options = {
    prompt: "What's your name?\n>"
}



read(options, displayName)

