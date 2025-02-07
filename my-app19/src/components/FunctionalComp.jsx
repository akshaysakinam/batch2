import React from 'react'
import './styles.css'
const FunctionalComp = (props) => {
    let applyStyle=props.apply?'heading':''
    let inlineStyle={
        color:'red',
        fontSize:'100px'
    }
  return (
    <div>
        <h1 className={`${applyStyle} font-style`}>Welcome to React Class at {props.clgname} {props.location}</h1>
        <h2 style={inlineStyle}>Good Morning</h2>
    </div>
  )
}

export default FunctionalComp