import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Products from './Products/Products';

const listOfItems = ['Earth', 'Sun', 'Moon', 'Saturn'];

function App2() {
  const [title, setTitle] = useState("Original")
  return (
    <div className="App">
      <header>
        <h2>Learn React Snapshot Testing</h2>
        <Products items={listOfItems}/>
        <h3>Subscribe and follow sarjit</h3>
      </header>
    </div>
  );
}

export default App2;
