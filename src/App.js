import React from "react";

// const React = require("react")

function Hello() {
  return <h1>Hello...</h1>;
}

function Greeting({ name, age }) {
  const message = age
    ? ` You are ${age} years old`
    : ` your age is not inputted`;
  return (
    <div>
      <Hello />
      {name}!{message}
    </div>
  );
}

function App() {
  const people = [
    { name: "Sjouke", age: 28 },
    { name: "Erik", age: 30 },
    { name: "Rein", age: 31 },
    { name: "Lisa", age: 35 },
    { name: "Tim", age: 27 },
  ];

  const greetings = people.map((person) => {
    const greeting = (
      <Greeting key={person.name} name={person.name} age={person.age} />
    );
    return greeting;
  });
  return <div>{greetings}</div>;
}

export default App;
