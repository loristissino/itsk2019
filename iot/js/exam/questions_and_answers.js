var myQuestions = [
   {
       question: "Qual è il capoluogo del FVG?",
       answers: [ "Trieste", "Gorizia", "Udine", "Pordenone" ],
       correct: 0
   },
   {
       question: "Qual è la capitale dell'Italia?",
       answers: [ "Milano", "Roma", "Palermo", "Torino" ],
       correct: 1
   },
   {
       question: "Quanto fa 3+4?",
       answers: [ "5", "6", "7", "8" ],
       correct: 2
   },
]

// see http://codelikethis.com/lessons/javascript/input-and-output
const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

async function start(questions) {
    var ok = 0;
    
    for (let i=0; i<questions.length; i++) {
        var q = questions[i];
        console.log(q.question);
        for (let a=0; a<q.answers.length; a++) {
            console.log("  " + (a+1) + ") " + q.answers[a]);
        }
        let answer = await ask("La tua risposta? ");
        let value = parseInt(answer)-1; // TODO usare un try... catch
        if (value==q.correct) {
            ok++;
        }
    }
    
    console.log("Risposte corrette: " + ok + " su " + questions.length + ".");
    
  process.exit();
}

function shuffle(array) {
    for (let i=0; i<array.length-1; i++) {
        let randomIndex = Math.floor(Math.random() * (array.length-i))+i;
        let temp = array[i];
        array[i]=array[randomIndex];
        array[randomIndex] = temp;
    }
};

function shuffleQuestions(questions){
    shuffle(questions);
    questions.map(shuffleAnswers);
}

function shuffleAnswers(question){
    let correctAnswer = question.answers[question.correct];
    shuffle(question.answers);
    question.correct = question.answers.findIndex( x => x==correctAnswer );
}

shuffleQuestions(myQuestions);

start(myQuestions);


