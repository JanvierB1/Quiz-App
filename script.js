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
        question: 'what is 2 + 13?',
        choice1: '2',
        choice2: '4',
        choice3: '15',
        choice4: '41',
        answer: 3,
    },
    {
        question: 'what is 39 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '15',
        choice4: '41',
        answer: 4,
    },
    {
        question: 'what is 13 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '15',
        choice4: '41',
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

