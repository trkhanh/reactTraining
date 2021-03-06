import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'

let state = 0;
const MyComponent = props => {
  return <h1>Hello, {props.name}!</h1>;
};

const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));

function App() {
  tick() 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent name='WORLD'></MyComponent>
      </header>
    </div>
  );
}

function AppDOM() {
  ReactDOM.render(element, document.getElementById('root'));
  return (
    <div id="root"></div>
  );
}

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

if (module.hot) {
  module.hot.accept();
}

setInterval(tick, 1000);

export default App;
