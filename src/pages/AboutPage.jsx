import React from 'react'
import { Link } from 'react-router-dom'

//import components
import Card from '../components/shared/Card'

//import tech values
import techsUsed from './TechsUsed'

const AboutPage = () => {
  return (
    <Card>
        <div className='about'>
            <h1>About this project</h1>
            <p>This an small react app to list animes and you can add your favorites too.</p>
            <ul>
                {
                    techsUsed.map( tech => (<li key={tech.id}>{tech.name}</li>))
                }
            </ul>
            <p>Version 1.0.0</p>
            <p>
                <Link to="/">Return...</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage