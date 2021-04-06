import React from 'react'

export default rand => {
    var random = Math.floor(Math.random()*10)
    return(
        <div>        
            <h1>Random number</h1>
            <p>{ random }</p>
        </div>
    );
}