import React from 'react'

import First from './components/basics/first';
import WithParameter from './components/basics/WithParameter';
import Fragments from './components/basics/Fragments';

export default props => {
    return(
        <div id="App">
            <h1>Fundamentos React</h1>
            <Fragments />
            <WithParameter
                title="Situacao do aluno"
                student="Pedro Silva"
                grade={9.3}
            />
            <First></First>
        </div>
    );
}