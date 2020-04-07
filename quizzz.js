function move() {
    if(quiz.isEnded()) {
        showScore();
    }
    else {
        
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        Progress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        move();
    }
};


function Progress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScore() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

var questions = [
    new Question("Which one is not a front-end language", ["HTML", "CSS","JS", "PHP"], "PHP"),
    new Question("Which language is used for styling web pages?", ["HTML", "JS", "CSS", "PHP"], "CSS"),
    new Question("Which of the following are markup languages.", ["HTML", "XHTML","XML", "All"], "All"),
    new Question("Which language is a scripting language?", ["PHP", "Python", "JS", "All"], "All"),
    new Question("Javascript is a ____.", ["Programming Language", "Library", "Framework", "All"], "Programming Language")
];

var quiz = new Quiz(questions);
move();





