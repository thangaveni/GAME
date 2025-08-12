let randomNumber=Math.floor(Math.random()*100)+1;
var attempts=0;
var timeLeft=30;
var timerId;
function startTimer(){
    timerId = setInterval(function(){
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        if(timeLeft <= 0){
            clearInterval(timerId);
            document.getElementById('btn').disabled = true;
            display("Time's up! Game Over. The number was " + randomNumber);
        }
    }, 1000);
}

function guessing(){
    var guess=parseInt(document.getElementById('guessInput').value);
    attempts++;
    if(guess===randomNumber){
        display("Congratulations you Won the Game in "+attempts+"attempts");
        document.getElementById('btn').disabled=true;
    }
    else if(guess<randomNumber){
        display("The Number is too low try a higher Number ");
    }
    else{
        display("The Number is too high try a lower Number");
    }
}

function display(msg){
    document.getElementById('msg').textContent=msg;
}
startTimer();