import './App.css';
import { useState } from 'react';

function App() {
  const listOfNames = ['name1', 'name2', 'name3'];
  const [title, setTitle] = useState("Original")
  let count = 1;
  return (
    <div className="App">
      {/* <h1>{title}</h1> */}
      {listOfNames.map((item) => {
        return <div data-testid={"item"}>{item}</div>
      })}
      {/* <button onClick={() => setTitle("Duplicate")} data-testid="moreinfobutton">More Info</button> */}
    </div>
  );
}

export default App;
