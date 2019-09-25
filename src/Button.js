import React from 'react'
import UpdatedComponent from './components/HOC'

const Button = (props) => {
    return (
        <div>
            <button onClick ={props.incrementCount}>current count is {props.count} and name is {props.name}</button>
        </div>
    )
}

export default UpdatedComponent(Button , 10)
