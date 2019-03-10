var makePolitician = function (firstName) {

var politician = {}; // new blank object
politician.name = firstName; // set name to parameter value
politician.electionResults = null;
politician.totalVotes = "0";

return politician;
  
};

var candidateOne = makePolitician("Hilary");
var candidateTwo = makePolitician("Donald");

