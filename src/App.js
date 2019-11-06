import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import {CounterHooks} from './CounterHooks';

function App() {
  return (
    <div className="App">
      <Counter/>
      <CounterHooks/>
    </div>
  );
}

export default App;
