import React, { useState, useEffect, useRef } from "react";
import "MyCounter";
import './App.css';
 
function App() {
  const [count, setCount] = useState(0);
  const buttonRef = useRef();
  // console.log(buttonRef)
  useEffect(() => {
    buttonRef.current.addEventListener("customOnClick", (e) => {
      setCount(count + 1)
      console.log(e.detail.text)
    });
  });
  return (
    <div>
      <ul className="list-group">
        <li>React counter
            <span className="badge">{count}</span>
        </li>
        <li>        
          <my-counter
            name="+"
            title="咣"
            ref={buttonRef}
            // the classic onClick also works
            onClick={(e) => {
              console.log("on click", e);
            }}
          />
        </li>
      </ul>
    </div>
  );
}
 
export default App;