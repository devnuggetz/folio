import React, { useContext, useState } from 'react'
import Typist from 'react-typist'
import './AnimatedText.Module.css'
import './MainDisplay.css'

function MainDisplay() {
    return (
        <div className='mainDisplay'>
            
            <Typist>
            <h2>Hello! <br />
                <Typist.Delay ms={300} />
                I am <span className='displayName'>Shuvam Kumar</span>, <br />
                <Typist.Delay ms={300} />
                I like apples but <br />
                <span className='displayText'>not more</span> than oranges.
            </h2>
            </Typist>
            
        </div>
    )
}

export default MainDisplay
