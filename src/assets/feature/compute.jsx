const choices = ['rock', 'paper', 'scissors']

const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
}

export const getResult = (playerChoice) => {
    const computerChoice = getComputerChoice();
    let result;
    if (playerChoice === 'rock') {
        if (computerChoice === 'paper') {
            result = 'lose';
        } else if (computerChoice === 'scissors') {
            result = 'win';
        } else {
            result = 'tied';
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            result = 'win';
        } else if (computerChoice === 'scissors') {
            result = 'lose';
        } else {
            result = 'tied';
        }
    } else {
        if (computerChoice === 'paper') {
            result = 'win';
        } else if (computerChoice === 'rock') {
            result = 'lose';
        }
        else {
            result = 'tied';
        }
    }
    return {playerChoice, computerChoice, result};
}
