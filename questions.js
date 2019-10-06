// Questions Array
var ofQuestions = [
    {
    question : "What does HTML stand for?",
    choiceA : "Hyper Text Markup Language",
    choiceB : "Hyperlinks and Text Markup Languages",
    choiceC : "Home Tool Markup Language",
    choiceD : "Hyperlinks That Make Lanuage",
    correct : "Hyper Text Markup Language",
    },{
    question : "What does DOM stand for?",
    choiceA : "Documentary Of Modes",
    choiceB : "Document Object Model",
    choiceC : "Decision Object Model",
    choiceD : "Document Oscar Model",
    correct : "Document Object Model",
    },{
    question : "What does the getElementById function do?",
    choiceA : "Allows you to create an element",
    choiceB : "Allows you to replace/update the contents of an element",
    choiceC : "Allows you to select and use a DOM element with the specified ID",
    choiceD : "getElementById is not a real function",
    correct : "Allows you to select and use a DOM element with the specified ID",
    },{
    question : "How do you print something in Javascript?",
    choiceA : "console. log();",
    choiceB : "document. write();",
    choiceC : "alert();",
    choiceD : "All of the above",
    correct : "All of the above",
    },{
    question : "Which of these is not a Javascript operator?",
    choiceA : "+",
    choiceB : "//",
    choiceC : "!==",
    choiceD : "&&",
    correct : "//",
    },
];

// Select all elements to update the inner HTML

var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var viewHighScores = document.getElementById("viewHighScores");
var timer = document.getElementById("timer");
var questions = document.getElementById("question");
var result = document.getElementById("result");
var scores = document.getElementById("scores");
var result = document.getElementById("result")

var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");

// Create Variables

let lastQuestion = questions.length -1;
//let runningQuestion = 0;

// Render Question

function renderQuestion(runningQuestion) {
    console.log(runningQuestion)
    let q = ofQuestions[runningQuestion];
    //console.log("q", q);
    questions.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

    choiceA.addEventListener("click", function(){
        console.log(this.textContent)
        runningQuestion++
        renderQuestion(runningQuestion)
        if(this.textContent === q.correct){
           result.innerHTML = "Correct!"
        }else{
            result.innerHTML = "Wrong!"
        }

    })

    choiceB.addEventListener("click", function(){
        console.log(this.textContent)
        runningQuestion++
        renderQuestion(runningQuestion)
        if(this.textContent === q.correct){
            result.innerHTML = "Correct!"
        }else{
           result.innerHTML = "Wrong!"
        }
        

    })

    choiceC.addEventListener("click", function(){
        console.log(this.textContent)
        runningQuestion++
        renderQuestion(runningQuestion)
        if(this.textContent === q.correct){
            result.innerHTML = "Correct!";
        }else{
           result.innerHTML = "Wrong!";
        }
       

    })
    
    choiceD.addEventListener("click", function(){
        console.log(this.textContent)
        runningQuestion++
        renderQuestion(runningQuestion)
        if(this.textContent === q.correct){
            console.log()
            result.innerHTML = "Correct!";       
        }else{
            result.innerHTML = "Wrong!"   
        }
    })
    
    
}




// Display correct answer at the bottom
// if (answer === ofQuestions[runningQuestion.correct]){
//     getElementById("score", "Correct!");
// }else{
//     getElementById("score", "Wrong!");
// }

var playing = true;
start.addEventListener("click", startQuiz);

for(var i=1;i<ofQuestions.length;i++){
    renderQuestion(i)
  console.log(list[i]); 
  if (list[i] === '') {break;}
}


// Start Quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion(0);
    quiz.style.display = "block";
    // timerRender();
}

//Check User Answer



// Timer 

var timerCount = 75;
function timerRender() {
    // setInterval(countdown, 1000);
}


// function countdown() {
//     timerCount--;
//      timer.textContent = timerCount;
//     if (timerCount === 0){
//         scoreRender();
//     }else{
//         // renderQuestion();
//     }
// }


// function checkAnswer(){
//     if( answer == ofQuestions[runningQuestion].correct){
//         // answer is correct
//         timerCount+10;
//         runningQuestion++;
//         renderQuestion();
        
//     }else{
//         // answer is wrong
//         timerCount-10;
//         runningQuestion++;
//         renderQuestion();
//     }
//     if(runningQuestion < lastQuestion){
//         runningQuestion++;
//         renderQuestion();
//     }else{
//         // end the quiz and show the score
//         scoreRender();
//         function scoreRender(){
//             scoresDiv.style.display = "block";
//     }
// }
// }

