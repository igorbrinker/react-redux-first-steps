import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import First from './components/basics/first'
import WithParameter from './components/basics/WithParameter'
import Fragments from './components/basics/Fragments'


ReactDOM.render(
    <div id="app">
        <First/>
        <WithParameter 
            title="Student Situation" 
            student="Pedro Silva"
            grade={8.3} />
        <Fragments/>
    </div>, 
    document.getElementById('root')
)