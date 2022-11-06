// ID selectors
var questionBox= document.getElementById("questionBox")
var initials= document.getElementById ("initials")
var highScore= document.getElementById ("highScore")
var start= document.getElementById ("start")
var infoBox= document.getElementById ("infoBox")
var questionArray= [{
    questionName:"Common used data types DO NOT include:", 
    choices:["1.strings", "2.booleans","3.alerts","4.numbers"], solution: "3.alerts"
    },
    {questionName:"The condition in an If / else statement is enclosed within ____.",
    choices:["1.quotes", "2.curly brackets", "3.parentheses", "4.square brackets"], solution: "3.parentheses"},





]



// Start quiz function
function startQuiz() { 
infoBox.classList.add("hide")
questionBox.classList.remove("hide")
initials.classList.add("hide")
}


start.addEventListener("click",startQuiz)
