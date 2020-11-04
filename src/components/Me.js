import React from 'react'
import './Me.css'

function Me() {
    return (
        <div className='me'>
            <div className='me__top'>
            <div className='me__left'>
                <img src='https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png' alt='' />
            </div>
            <div className='me__right'>
                <p><span className='me__spanText'>My wisdom</span>: "An apple a day keeps the doctor away"</p>
                <div className='me__right--about'>
                    <p><i>I am an engineering student, currently in my third year of college.
                    I like exploring technology, nature and human psychology. I always try to have an 
                    entrepreneurial angle in every aspect of life. I like brainstorming ideas and 
                    bringing them to life. I am noob in this web development domain and I've displayed my skills 
                    down below. To have a discussion on literaly any topic, drop me a text.</i>
                    </p>
                </div>
            </div>
            </div>
            
            <div className='me__bottom'>

            </div>
        </div>
    )
}

export default Me
