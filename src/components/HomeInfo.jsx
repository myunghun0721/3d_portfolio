import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
            {text}
        </p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Myunghun Choi</span> 👻
            <br />
            You can interact this cool island by using arrow-key or your mouse.
        </h1>
    ),
    2: (
        <InfoBox
            text="Hello, my name is Myunghun Choi, but you can call me Hun. I'm a full-stack engineer with a passion for interactive development."
            link={"/about"}
            btnText={"Learn more"}
        />
    ),
    3: (
        <InfoBox
            text="I have few full-stack projects to share with you! Curious about the projects?"
            link={"/projects"}
            btnText={"See my projects"}
        />
    ),
    4: (
        <InfoBox
            text="I'm currently looking for a full-time entry-level software engineering positions! Please contact me!"
            link={"/contact"}
            btnText={"Let's talk"}
        />
    ),
}



const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo
