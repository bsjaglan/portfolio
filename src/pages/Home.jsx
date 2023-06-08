import React from 'react'
import Intro from '../components/home/Intro'
import Skillset from '../components/home/Skillset'
import ProjectCarosel from '../components/home/ProjectCarosel'
import GetInTouch from '../components/home/GetInTouch'

function Home() {
  return (
    <div className='mt-20'>
        <Intro />
        <Skillset />
        <ProjectCarosel />
        <GetInTouch />
    </div>
  )
}

export default Home