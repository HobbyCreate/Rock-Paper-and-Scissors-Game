import React from 'react'
import './Results.css'
import Rock from '../../assets/images/rock.png';
import Paper from '../../assets/images/paper.png';
import Scissors from '../../assets/images/scissors.png';


function Results(props) {
    let playerSRC;
    let computerSCR;

    if(props.results.playerChoice === 'rock'){
        playerSRC = Rock;
    }  else if (props.results.playerChoice === 'paper'){
        playerSRC = Paper;
    } else {
        playerSRC = Scissors;
    }

    if(props.results.computerChoice === 'rock'){
        computerSCR = Rock;
    }  else if (props.results.computerChoice === 'paper'){
        computerSCR = Paper;
    } else {
        computerSCR = Scissors;
    }

    return (
        <div className='result-contaniner'>
            <h1 className={
                (props.results.result === 'win' ? 'win-announce' :
                    props.results.result === 'lose' ? 'lose-announce' : 'tie-announce')
            }>{`${(props.results.result).toUpperCase()} !!`}</h1>

            <div className='show-choice'>
                <div className='player'>
                    <img className='img' src={playerSRC} alt={props.results.playerChoice} />
                    <h4>{`You choose ${props.results.playerChoice}`} </h4>
                </div>
                <div className='computer'>
                    <img className='img' src={computerSCR} alt={props.results.computerChoice} />
                    <h4>{`Computer choose ${props.results.computerChoice}`}</h4>
                </div>
            </div>
            
        </div>
    )
}

export default Results