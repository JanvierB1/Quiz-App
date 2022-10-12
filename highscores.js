var highScoresList = document.querySelector('#highScoreList')
var highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = 
highScores.map(score => {
    return `<li class="high-scores">${score.name} - ${score.score}</li>`
}).join('')