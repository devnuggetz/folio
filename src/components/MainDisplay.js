import React from 'react'
import Typist from 'react-typist'
import './MainDisplay.css'

function MainDisplay() {
    return (
        <div className='mainDisplay'>
            <Typist>
            <h2>Hello! <br />
                <Typist.Delay ms={300} />
                I am Shuvam Kumar, <br />
                <Typist.Delay ms={300} />
                I like apples but <br />
                not more than oranges.
            </h2>
            </Typist>
        </div>
    )
}

export default MainDisplay
