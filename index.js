let homeScore=document.getElementById("home-score-el")
let awayScore=document.getElementById("away-score-el")
let scoreH=0
let scoreA=0



function add1Home(){
    scoreH += 1
    homeScore.textContent=scoreH
}
function add2Home(){
    scoreH += 2
    homeScore.textContent=scoreH
}
function add3Home(){
    scoreH += 3
    homeScore.textContent=scoreH
}

function add1Away(){
    scoreA += 1
    awayScore.textContent=scoreA
}
function add2Away(){
    scoreA += 2
    awayScore.textContent=scoreA
}
function add3Away(){
    scoreA += 3
    awayScore.textContent=scoreA
}

function resetScore(){
    scoreA=0
    scoreH=0
    awayScore.textContent=scoreA
    homeScore.textContent=scoreH
}

//TIMER
const duration = 15 * 60 * 1000; // 15 minutes en milliseconds
let timerEl=document.getElementById("timer")
const endTime = Date.now() + duration;



function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
function startTimer(){
    const interval = setInterval(() => {
        const now = Date.now();
        const remainingTime = endTime - now;

        if (remainingTime <= 0) {
            clearInterval(interval);
            timerEl.textContent = '00:00';
            alert('Time is up!');
        } else {
            timerEl.textContent = formatTime(remainingTime);
        }
    }, 1000);
}
