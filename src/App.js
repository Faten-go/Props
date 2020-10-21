import React from 'react';
import './App.css';

// import component 
import component from"./profile/component"


function App() {
let component=[ {fullName}, {bio},{profession}  ]
  return (
    <div>
      <h1> checkpoint_props  </h1>
      <component fullName="Faten" bio="hello!"  profession="student"/>
       </div>  
  );
}

export default App;
