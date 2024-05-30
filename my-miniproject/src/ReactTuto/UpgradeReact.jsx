import React from 'react'
import LearnReact from './LearnReact'

const UpgradeReact = () => {
  return (
    <>

    <div className='row'>

    <div className='col-md-2 customDiv'>
            <LearnReact/>
        </div>
    <div className='col-md-8'>
        <h3> Upgrade React </h3>
        <h4>Upgrade to React 18 </h4>
        <p>Upgrading an existing React application to version 18 only requires two steps.

If you are already using the latest version of create-react-app which uses React version 18 you can skip this section.</p>
        </div>
     </div>

    </>
  )
}

export default UpgradeReact;