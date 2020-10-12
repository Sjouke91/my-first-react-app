import React from 'react';
// const React = require("react")

function Hello (){
  return <h1>Hello...</h1> 
}

function  Greeting ({ name, age }){
  const message = age 
    ? ` You are ${age} years old` 
    : ` your age is not inputted`
  return <div>
    <Hello />
    {name}!
    {message}
  </div>
}

function App() {
  return (
    <div>
      <Greeting name="Sjouke" age="28" />
      <Greeting name="Erik" age="32" />
    </div>
  );
}

export default App;
