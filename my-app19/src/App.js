// import React from "react";
// import FBCPRopExample from "./propexample/FBCPRopExample";

// function App() {
 
//   return (
//     <div>
//      <FBCPRopExample 
//       username="Mahe+sh"
//       isLoggedin={true}
//       profiles={["snap","insta","facebook","X"]}
//      />
//     </div>
//   );
// }

// export default App;


// import React, { Component } from "react";
// import CBCPropExample from "./propexample/CBCPropExample";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         App
//         <hr></hr>
//         <br></br>
//         <CBCPropExample username="Akshay" age={21}
//           hobbies={["playing","reading books"]}
//           address={{city:"hyd"}}
//           isMarried={false}
//           sendFun={function(){
//             alert("Hello Akshay")
//           }}
//         />
//       </div>
//     );
//   }
// }


//Props.children

// import React from 'react'
// import PropsChildren from './propexample/PropsChildren'
// import SubChildProps from './propexample/SubChildProps'

// const App = () => {
//   return (
//     <div>
//       <PropsChildren username="Akshay" company="Google">
//         <h1>This data is passing as props to child</h1>
//         <SubChildProps></SubChildProps>
//       </PropsChildren>
//     </div>
//   )
// }

// export default App


import React from 'react'
import UseEffectEg from './hookexample/UseEffectEg'
// import CBCStateEg from './stateexamples/CBCStateEg'
// import FBCStateEg from './stateexamples/FBCStateEg'
// import FunctionalComp from './components/FunctionalComp'
// import ClassComponent from './components/ClassComponent'
// import Form from './components/Form'


const App = () => {
  return (
    <div>
      {/* <CBCStateEg/> */}
      {/* <FBCStateEg/> */}
      {/* <FunctionalComp clgname='MRU' location='HYD' apply={true} /> */}
      {/* <ClassComponent/> */}
      {/* <Form/> */}
      <UseEffectEg/>
    </div>
    )
}

export default App