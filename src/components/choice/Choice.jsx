import React, { useState, useEffect } from 'react';
import './Choice.css';
import Rock from '../../assets/images/rock.png';
import Paper from '../../assets/images/paper.png';
import Scissors from '../../assets/images/scissors.png';
import Results from '../results/Results';
import { getResult } from '../../assets/feature/compute';

function Choice() {
    const [player, setPlayer] = useState('');
    const [results, setResults] = useState({
        playerChoice: '',
        computerChoice: '',
        result: ''
    });

    const playerHandler = (e) => {
        setPlayer(e.target.alt);
    }

    useEffect(() => {
        if(player === '') {
            return;
        }
        setResults(getResult(player));
    },[player])

    useEffect(() => {
        console.log(results)
        setPlayer('');
    }, [results]);

    return (
        <>
            <div className='choice-container'>
                <h3>Please select your choice</h3>
                <div className='choice'>
                    <div className='rock'>
                        <img className='rock-img' src={Rock} alt='rock' onClick={playerHandler} />
                        <h4>Rock</h4>
                    </div>
                    <div className='paper'>
                        <img className='paper-img' src={Paper} alt='paper' onClick={playerHandler} />
                        <h4>Paper</h4>
                    </div>
                    <div className='scissors'>
                        <img className='scissors-img' src={Scissors} alt='scissors' onClick={playerHandler} />
                        <h4>Scissors</h4>
                    </div>
                </div>
            </div>
            <Results results = {results} />
        </>
    )
}

export default Choice