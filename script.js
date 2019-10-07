
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var qImg = document.getElementById("qImg");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");
var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = document.getElementById("mostRecentScore");

var questions = [
    {
        question : "Inside which HTML element do we put the JavaScript?",
        
        choiceA : "script",
        choiceB : "scripting",
        choiceC : "js",
        correct : "A"
    },{
        question : "Where is the correct place to insert a JavaScript?",
       
        choiceA : "The body section",
        choiceB : "Both the head and body section",
        choiceC : "The head section",
        correct : "B"
    },{
        question : "How do you write 'Hello World' in an alert box?",
        
        choiceA : "console.log('Hello World')",
        choiceB : "prompt('Hello World')",
        choiceC : "alert('Hello World')",
        correct : "C"
    },{
        question : "Which event occurs when the user clicks on an HTML element?",
        
        choiceA : "onmouseover",
        choiceB : "onclick",
        choiceC : "onchange",
        correct : "B"
    },{
        question : "How can you add a comment in a JavaScript?",
        
        choiceA : "'This is a comment",
        choiceB : "//This is a comment",
        choiceC : "?This is a comment",
        correct : "B"

    } 

];

//Variables to start timer

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = -75;
const questionTime = 15; // 15s
const gaugeWidth = 150; 
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// To get questions
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        count++
    }else{
        count = 0;
       
        
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
       
        
    }else{
        answer !== question
        }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // End of quiz percentage shown
        clearInterval(TIMER);
        scoreRender();
    }
}


// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    console.log(scorePerCent);
    var person = prompt("Please enter your name for Score");
    console.log(person);

    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

//Store High Score in local storage

const highScores = JSON.parse(localStorage.getItem("highScores"));
const maxHighScore = 5;
console.log(highScores);


username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.nodeValue;
});

saveHighScore = e =>{
    console.log("clicked the save button!");
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };
    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score)
    highScores.splice(5);
    localStorage.setItem("highscores", JSON.stringify)
    console.log(highScores);
};





















