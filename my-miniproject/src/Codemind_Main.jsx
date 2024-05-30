import React from 'react'

import {
    BrowserRouter,
    Routes,Route
  } from "react-router-dom";
import HTML from './HTMLTuto/HTML';
import CSS from './CSSTuto/CSS';
import JavaScript from './JAVASCRIPTTuto/JavaScript_Main';
import React_Main from './ReactTuto/React_Main';
import React_Intro from './ReactTuto/React_Intro';
import React_Started from './ReactTuto/React_Started';
import UpgradeReact from './ReactTuto/UpgradeReact';
import JS_Intro from './JAVASCRIPTTuto/JS_Intro';


const CodeMind_Main = () => {
  return (
    <>
    <BrowserRouter>

 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/html">HTML</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/css">CSS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/javaScript">JavaScript</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/react">React</a>
        </li>
      </ul>
      </div>

<form class="form-inline my-2 my-lg-0">
  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
  {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
</form>
</div>
    

  
</nav>

    <Routes>
            <Route exact path='/html' element={<HTML/>} ></Route>
            <Route exact path='/css' element={<CSS/>}></Route>
            <Route exact path='/javaScript' element={<JavaScript/>} ></Route>
             <Route exact path='/react' element={<React_Main/>} ></Route>
            
            <Route exact path='/react/introduction' element={<React_Intro/>} ></Route>
            <Route exact path='/react/getting started' element={<React_Started/>} ></Route>
             <Route exact path='/react/upgrade react' element={<UpgradeReact/>} ></Route> 

             <Route exact path='/javaScript/js intro' element={<JS_Intro/>} ></Route>

    </Routes>

</BrowserRouter>
    </>
  )
}

export default CodeMind_Main
