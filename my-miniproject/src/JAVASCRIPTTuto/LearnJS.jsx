import React from 'react'
import "../customDiv.css"
import { NavLink } from 'react-router-dom'
const LearnJS= () => {
  return (
    <>
      <h3>JavaScript Tutorial</h3>

      <ul type='none' className='list' >

            <li> <NavLink className="nav-link" to="/javaScript/JS introduction ">JavaScript Introduction</NavLink></li>
            <li> <NavLink className="nav-link" to="/react/JS operator"> JavaScript Operators</NavLink></li>
            <li> <NavLink className="nav-link" to="/react/Js DataTypes">JavaScript Data Types</NavLink></li>
            <li> <NavLink className="nav-link" to="/react/JS objects">JavaScript Objects </NavLink></li>
      </ul>
    </>
  )
}

export default LearnJS;
