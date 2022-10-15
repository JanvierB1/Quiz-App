var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion ={}
let acceptingAnswer = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'what is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '15',
        choice4: '41',
        answer: 2,
    },
    {
        question: 'What does HTTPS Stand for?',
        choice1: 'Hyper Text Tranfer Protocol',
        choice2: 'Hype Tranfer Protocol',
        choice3: 'Hyper Text Transfer Protocol Secure',
        choice4: 'Hyper Text Protocol Sceure Tranfer',
        answer: 3,
    },
    {
        question: 'What does WWW Stand for?',
        choice1: 'Wide World Web',
        choice2: 'Web Wide World',
        choice3: 'Web World Wide',
        choice4: 'World Wide Web',
        answer: 4,
    },
    {
        question: 'Is Coding stressful?',
        choice1: 'A little',
        choice2: 'Maybe',
        choice3: 'YESSS! But fun!',
        choice4: 'NAhhh',
        answer: 3,
    }
]

var SCORE_POINTS = 100
var MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

var count = 15;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML
    alert("You're out of time!");
  }
}, 1000);

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
    
        return window.location.assign('end.html')
    }

    questionCounter ++
    // progressText.innerText =`Question ${questionCounter} of ${MAX_QUESTIONS}'
    // progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%`

    var questionindex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionindex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        var number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionindex, 1)

    acceptingAnswer = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswer) return

        acceptingAnswer = false
        var selectedChoice = e.target
        var selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)
        
        setTimeout(() =>{
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()


        }, 1000) 
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()

