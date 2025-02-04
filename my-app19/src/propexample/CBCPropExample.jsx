import React, { Component } from "react";

class CBCPropExample extends Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.username}
          <br></br>
          
          {this.props.age}
        </h1>
        {
          this.props.hobbies.map(hobby=>{
            return <li>{hobby}</li>
          })
        }
        {this.props.isMarried ? <h1>Married</h1> : <h1>Not Married</h1>}
        <button onClick={this.props.sendFun}>Click</button>
      </div>
    );
  }
}
export default CBCPropExample;
