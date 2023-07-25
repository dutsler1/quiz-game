var clickBtn = document.getElementById('click');
var timerEl = document.getElementById('timer');
var firstContainer = document.getElementById('first');
var time = 15;
var timerId;
var qInd = 0


var options = [
    {
        title: 'what is 6+6', 
        stars: [12,13,45,15]
    }, 
    {
        title: "what is 30 + 29", 
        stars: [89,69,59,79]
    }
];

function start() {
    timerEl.textContent = time
    // when this function starts it needs to start the timer 
    timerId = setInterval(function () {
        time--;
        timerEl.textContent = time

        if (time === 0) {
            clearInterval(timerId)
        }
    }, 1000);
    questionDisplay()
}

function questionDisplay(){
    
    
    // create the element 
    // var h1El = document.createElement('h1')
    var h1El = document.getElementById("question")
    // add content to the element
    h1El.textContent = options[qInd].title
    
    // append the child element into the parent container
    firstContainer.append(h1El)
    
    for (let i = 0; i < options[qInd].stars.length; i++) {
       
        var btn = document.createElement('button')
        btn.textContent = options[qInd].stars[i]
    
        btn.addEventListener('click', function(){
            qInd++
    
            questionDisplay()
        })
    
        firstContainer.append(btn)
    
    }
}

clickBtn.addEventListener('click', start)



//  GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```