import React from 'react'
import LearnReact from './LearnReact'

const React_Started = () => {
  return (
    <>

    <div className='row'>

    <div className='col-md-2 customDiv'>
            <LearnReact/>
        </div>
    <div className='col-md-8'>
        <h3> React Getting Started </h3>
      <h4>To use React in production, you need npm which is included with Node.js.

To get an overview of what React is, you can write React code directly in HTML.

But in order to use React in production, you need npm and Node.js installed.</h4>
<h3>React Directly in HTML</h3>
<h4>
The quickest way start learning React is to write React directly in your HTML files.</h4>
        </div>
     </div> 

    </>
  )
}

export default React_Started;
