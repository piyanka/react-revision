import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(5);

  const IncrementCounter = () => {
    if(counter < 20){
      setCounter(counter + 1);
    }else{
      alert("You can't perform this function more.");
    }
  }

  const DecrementCounter = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }else{
      alert("You can't perform this function more.");
    }
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
