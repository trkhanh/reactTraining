import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'

let state = 0;
const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  }, {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },];
const MyComponent = props => {
  return <h1>Hello, {props.name}!</h1>;
};

const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));

function App() {
  return (
    <div className="App">
      {list.map(function (item) {
        return (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>);
      })}
    </div>
  );
}

if (module.hot) {
  module.hot.accept();
}


export default App;
