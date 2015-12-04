var app = angular.module("multipleChoice", ["ngSanitize"]);

app.controller('MultipleChoiceController', function(){
	var self = this;

	self.mcQuestions = [{
		question: "What class is this?",
		choices: ["CS 241", "STAT 428", "CS 210", "CS 374"],
		answer: ["CS 374"],
		hint: "No hint 4 u",
		explanation: "No explanation 4 u"
	},
	{
		question: "What class will you get destroyed in?",
		choices: ["CS 242", "STAT 429", "CS 210", "CS 473"],
		answer: ["CS 473"],
		hint: "Theory class",
		explanation: "think about it"
	}];

	self.q = ["asdf", "asdfasd", "asdfasd"];

	self.verifyAnswer = function(mcq, choice) {
		if (mcq.answer == choice) {
			mcq.displayAnswer = true;
			self.animateAnswer();
		}
	};

	self.formatHint = function(mcq) {
		if (mcq.displayHint) {
			return "<strong>Hint:</strong> " + mcq.hint;
		} else {
			return "";
		}
	};

	self.animateAnswer = function() {
		alert("YAY!");
	};

	self.formatAnswer = function(mcq) {
		if (mcq.displayAnswer) {
			return "<strong>Answer:</strong> " + mcq.answer;
		} else {
			return "";
		}
	};
});