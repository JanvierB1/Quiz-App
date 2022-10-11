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
        answer: 2,
    },
    {
        question: 'what is 39 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '15',
        choice4: '41',
        answer: 2,
    },
    {
        question: 'what is 13 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '15',
        choice4: '41',
        answer: 2,
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
    
        return window.location.assign('/end.html')
    }

    questionCounter ++
    progressText.innerText
}