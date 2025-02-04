import React from 'react'

const FBCPRopExample = (props) => {
  if(props.isLoggedin==true){
    return(
        <div>
             <h1>Welcome {props.username}</h1>
             {props.profiles.map(p=>{
                return <li>{p}</li>
             })}
        </div>
    )
  }
  else{
    return <h1>Please Login</h1>
  }
}

export default FBCPRopExample