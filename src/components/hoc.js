import React, { Component } from 'react'

const  UpdatedComponent = (OriginalComponent, increamentNumber) =>{
    
    class NewComponent extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        incrementCount=()=>{
            this.setState(prevState => {
                return {count:prevState.count+increamentNumber}
            })
        }
        render() {
            const {count} = this.state
            const {incrementCount} = this
            return (
                <OriginalComponent count={count} incrementCount={incrementCount} {...this.props}/>
            )
        }
    }
    
    return NewComponent
}

export default UpdatedComponent