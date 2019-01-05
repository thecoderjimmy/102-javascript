// JQuery
$(document).ready(function () {

    var magic8Ball = {};
    // Magic8Ball answer list
    magic8Ball.answers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams"];

    
    magic8Ball.askQuestion = function () {
        // Prompts user to input question in pop-up window
        var question = prompt("Ask me Y/N question!");
        
        // Create random index number
        var indexNumber = Math.floor(Math.random() * this.answers.length);
        var answer = this.answers[indexNumber];
        
        $("#answer").text(answer);
        
        console.log(question);
        console.log(answer);
    };

    $("#questionButton").click(magic8Ball.askQuestion);
    
});