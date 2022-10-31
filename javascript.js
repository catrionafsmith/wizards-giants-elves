// const para = document.createElement('p');
// const update = document.querySelector('.update');
// update.appendChild(para);
// const results = document.querySelector('.results');
const para = document.createElement('p');
const results = document.querySelector('.results');
results.appendChild(para);
para.textContent = "Let's see who will win!";

const new_scores = document.createElement('p');
const score = document.querySelector('.score');
score.appendChild(new_scores)
new_scores.textContent = "Player: 0 | Computer: 0" 

let player_score = 0;
let comp_score = 0;

function playRound(playerSelection, computerSelection) {
    console.log(`Player pick is ${playerSelection}`);
    console.log(`Computer pick is ${computerSelection}`);
    if ((playerSelection == "wizard" && computerSelection == "elves") || (playerSelection == "giant" && computerSelection == "wizard") || (playerSelection == "elves" && computerSelection == "giant")) {
        player_score += 1;
        para.textContent = ` You selected ${playerSelection}. Computer selected ${computerSelection}! You win!`
        new_scores.textContent = `Player score is ${player_score}. Computer score is ${comp_score}.\n`;
    } else if (playerSelection == computerSelection) {
        player_score += 1;
        comp_score +=1
        para.textContent = ` You selected ${playerSelection}. Computer selected ${computerSelection}! It's a tie!`
        new_scores.textContent = `Player score is ${player_score}. Computer score is ${comp_score}.\n`;
    } else {
        comp_score +=1
        para.textContent = ` You selected ${playerSelection}. Computer selected ${computerSelection}! Computer wins!` 
        new_scores.textContent = `Player score is ${player_score}. Computer score is ${comp_score}\n`;
    }
    if (player_score == 5) {
        results.textContent = "FINAL RECKONING! YOU ARE THE WINNER!"
        player_score = 0;
        comp_score = 0;
    } else if (comp_score == 5) {
        results.textContent = "FINAL RECKONING! COMPUTER IS THE WINNER!"
        player_score = 0;
        comp_score = 0;
    }
}

function playerChoice() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let computerSelection = computerPick();
            playRound(button.id, computerSelection);
             
        })
    
    })

}
playerChoice()

const wge_list = ["wizard", "giant", "elves"];
function computerPick() {
    let c_pick = wge_list[Math.floor(Math.random() * 3)];
    return c_pick
}

