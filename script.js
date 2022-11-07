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
    {questionName:"Arrays in JavaScript can be used to store ____.",
    choices: ["1.numbers and strings", "2.other arrays", "3.booleans", "4.all of the above"], solution: "4.all of the above"},
    {questionName:"String values must be encolsed within _____ when being assigned to variables.", choices: ["1.commas", "2.curly brackets", "3.quotes", "4.parentheses"], solution: "4.parentheses"},
    {questionName:"A very useful tool used during development and debugging for printing content to the debugger is:", choices: ["1.JavaScript", "2.terminal/bash", "3.for loops", "4.console log"], solution: "4.console log"}


]
var Timer= document.getElementsByName("Timer")


// Start quiz function
function startQuiz() { 
infoBox.classList.add("hide")
questionBox.classList.remove("hide")
initials.classList.add("hide")
}


start.addEventListener("click",startQuiz)
console.log()
