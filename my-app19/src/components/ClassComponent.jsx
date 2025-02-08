import React, { Component } from 'react'
import './styles.css'

class ClassComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        clicked:false,
         message:'Hi! Iam in React Class'
      }
    }
    changeMessage=()=>{
      this.setState({
        clicked:true,
        message:"Thanks for joining"
      })
    }

  render() {
    let applyStyle=this.state.clicked?'heading2':'heading'
    return (
      <div>
        <h1 className={applyStyle}>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Click Me</button>
      </div>
    )
  }
}

export default ClassComponent