let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".Choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#User-Score");
const compScorePara = document.querySelector("#Computer-Score");


const genCompChoice = () => {
    const options = ["Rock" , "Paper" , "Scissor"];
    const randIdx  = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const showWinner = (userWin , userChoice , CompChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Computer Win! ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "green";
    }
}


const Draw = () => {
    console.log("the game was DRAW");
    msg.innerText = "the game was DRAW. Play Again!";
    msg.style.backgroundColor = "Darkcslatecgrey";
}


const playGame = (userChoice) => {
    console.log("User Choice : " , userChoice);

    

    const CompChoice = genCompChoice().toLocaleLowerCase();
    userChoice = userChoice.toLocaleLowerCase();
    console.log("Computer Choice : " , CompChoice);

    if(userChoice === CompChoice){
        // Draw Game
        Draw();
    }

    else{
        userWin = true;
        if(userChoice === "rock"){
            userWin = CompChoice === "paper" ? false : true;
        }

        else if(userChoice === "paper"){
            userWin = CompChoice ==="scissor" ? false : true;
        }

        else{
            userWin = CompChoice === "rock" ? false : true;
        }

        showWinner(userWin , userChoice , CompChoice);
    }

}



choices.forEach((Choice) => {
    console.log(Choice)
    Choice.addEventListener("click" , () => {
        let userChoice = Choice.getAttribute("id");
        playGame(userChoice);
    });
})