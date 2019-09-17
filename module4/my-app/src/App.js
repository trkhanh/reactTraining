import React from 'react';
import logo from './logo.svg';
import './App.css';

let state = 0;
const MyComponent = props => {
  return <h1>Hello, {props.name}!</h1>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent name='WORLD'></MyComponent>
      </header>
    </div>
  );
}

export default App;
