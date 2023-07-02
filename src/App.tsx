import React, {createElement as e} from 'react';

function App() {
  // return (
  //   <h1>Hello React!!!</h1>
  // );
  return e('div', {className: 'container'}, 
    [
      e('h1', {classname: 'font-bold'}, 'Test JSX'), 
      e('button', {classname: ''}, 'Click on me')
    ])
}

export default App;
