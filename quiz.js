var count = 75;

var questions = [
    {
        "question": "Commonly used data types DO NOT include:",
        "options": [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        "correct_position": 2
    },
    {
        "question": "The condition in an if/else statement is enclosed with ____.",
        "options": [
            "quotes",
            "curly brackets",
            "parenthesis",
            "square brackets"
        ],
        "correct_position": 2
    },
    {
        "question": "Arrays in JavaScript can be used to store ____.",
        "options": [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        "correct_position": 3
    },
    {
        "question": "String values must be enclosed within ____ when being assigned to variables.",
        "options": [
            "commas",
            "curly brackets",
            "quotes",
            "parenthesis"
        ],
        "correct_position": 2
    },
    {
        "question": "A very useful tool used during development and debugging for printing content to the debugger is:",
        "options": [
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console.log"
        ],
        "correct_position": 3
    }
];

var timer = setInterval(function() {
  if(count === 0) {
    stopInterval()
  } else {
    count--;
    updateTimer();
  }
}, 1000);

var stopInterval = function() {
  clearInterval(timer);
}

function updateTimer() {
    var timerContainer = document.getElementById("timer");
    timerContainer.textContent = "score: " + count;
}

function showQuestion(questionNumber) {
    var currentQuestion = questions[questionNumber];
    var questionText = currentQuestion.question;
    var questionOptions = currentQuestion.options;
    var correctPosition = currentQuestion.correct_position;

    var questionContainer = document.getElementById("question");
    questionContainer.textContent = questionText;

    var answersContainer = document.getElementById("answer-buttons");
    answersContainer.innerHTML = "";
    for(var opt = 0; opt < questionOptions.length; opt++) {
        if(opt === correctPosition) {
            answersContainer.innerHTML = answersContainer.innerHTML + "<button class=\"btn\" onClick=\"processCorrect("+ questionNumber +")\">" + questionOptions[opt] + "</button>"
        } else {
            answersContainer.innerHTML = answersContainer.innerHTML + "<button class=\"btn\" onClick=\"processIncorrect(" + questionNumber + ")\">" + questionOptions[opt] + "</button>"
        }
    }
}

function showCorrect() {
    var answerStatus = document.getElementById("answer-status");
    answerStatus.textContent = "Correct!";
}

function showIncorrect() {
    var answerStatus = document.getElementById("answer-status");
    answerStatus.textContent = "Incorrect :(";
}

function processCorrect(questionNumber) {
    showCorrect();
    checkIfFinished(questionNumber);
}

function processIncorrect(questionNumber) {
    count-=5;
    updateTimer();
    showIncorrect();
    checkIfFinished(questionNumber);
}

function checkIfFinished(questionNumber) {
    if(count <= 0 || questionNumber === (questions.length - 1)) {
        done();
    } else {
        showQuestion(questionNumber + 1);
    }
}

function done() {
    stopInterval();
    // hide #count
    // show #topScore
    // show total score
    // capture initials
    // save score in localstore
    // go to high-score page
}

showQuestion(0);