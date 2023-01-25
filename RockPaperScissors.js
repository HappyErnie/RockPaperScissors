var player;
var playerScore = 0;
var computer;
var computerScore = 0;
var choices = ["Rock", "Paper", "Scissors"];

window.onload = function() {
    for (var i=0; i<3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    player = this.id; 
    document.getElementById("player-choice").src = player + ".png";

    computer = choices[Math.floor(Math.random() * 3)]; // Randomize 0 to 2
    document.getElementById("computer-choice").src = computer + ".png";

    // Check wins and add score
    if (player == "Rock") {
        if (computer == "Scissors") {
            playerScore += 1;
        } else if (computer == "Paper") {
            computerScore +=1;
        }
    }
    if (player == "Paper") {
        if (computer == "Rock") {
            playerScore += 1;
        } else if (computer == "Scissors") {
            computerScore +=1;
        }
    }
    if (player == "Scissors") {
        if (computer == "Paper") {
            playerScore += 1;
        } else if (computer == "Rock") {
            computerScore +=1;
        }
    }

    document.getElementById("computer-score").innerText = computerScore;
    document.getElementById("player-score").innerText = playerScore;
}

function refreshPage(){
    window.location.reload();
} 