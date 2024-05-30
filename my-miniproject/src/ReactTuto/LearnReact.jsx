import React from 'react'
import "../customDiv.css"
import { NavLink } from 'react-router-dom'

const LearnReact = () => {
  return (
    <>
      <h3>React Tutorial</h3>

      <ul type='none' className='list' >

            <li> <NavLink className="nav-link" to="/react/introduction">React Introduction</NavLink></li>
            <li> <NavLink className="nav-link" to="/react/getting started"> React Getting Started </NavLink></li>
            <li> <NavLink className="nav-link" to="/react/upgrade react">Upgrade React </NavLink></li>
            <li> <NavLink className="nav-link" to="/react/react ES6"> React ES6 </NavLink></li>
      </ul>
    </>
  )
}

export default LearnReact
