import React from 'react';
import './Header.css';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

function Header({toggleHandler, dark}) {
    return (
        <>
            <div className='header-components'>
                <h2>Rock Paper and Scissors Game</h2>
            </div>
            <div className= {dark ? "toggle-container-active" : "toggle-container"} >
                <div
                    className={dark ? "circle-active" : "circle"}
                    onClick={toggleHandler}
                >
                    <div>
                        {dark ? <span><BsMoonFill/></span> : <span><BsSunFill/></span>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header