import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(5);

  const IncrementCounter = () => {
    setCounter(counter + 1);
  }

  const DecrementCounter = () => {
    setCounter(counter - 1);
  }
  
  return (
    <div>
      <h2>Updates Counter values on Clicking on Respectives Buttons</h2>
      <h3>Counter Value : {counter}</h3>

      <button onClick={IncrementCounter}>Increase Counter</button>
      <br /><br />
      <button onClick={DecrementCounter}>Decrease Counter</button>
    </div>
    
  );
}

export default App;
