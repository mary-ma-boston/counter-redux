import React from 'react';
import Counter from './components/Counter';

import './App.css';

// function Child() {
//   return <div>This is children content</div>
// }

// function Parent(props) {
//   return(
//     <div>
//       <h3>Parent Component</h3>
//       {props.children}
//     </div>
//   )
// }

function App() {
  return (
    // <div>
    //   <Parent>
    //     <Child />
    //   </Parent> 
    // </div>
   <Counter />
  );
}

export default App;
