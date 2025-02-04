import React from "react";
import FBCPRopExample from "./propexample/FBCPRopExample";

function App() {
 
  return (
    <div>
     <FBCPRopExample 
      username="Mahesh"
      isLoggedin={true}
      profiles={["snap","insta","facebook","X"]}
     />
    </div>
  );
}

export default App;


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
