import React from 'react'

export default function WithParameter(props){
    const status = props.grade >=7 ? 'Aprovado' : 'Reprovado'
    const gradeInt = Math.ceil(props.grade)
    return ( 
        <div>
            <h2>{ props.title }</h2>
            <p>
                <strong> { props.student } </strong> 
                tem nota 
                <strong> { gradeInt } </strong>
                e esta
                <strong> { status } </strong>!
            </p>
        </div>
    )
}