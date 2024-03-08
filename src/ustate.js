import React, { useState } from 'react';
import './ustate.css';

export default function Ustate() {
  const [count, setCount] = useState(0); // Initial count state

  const handleCountIncrease = () => {
    setCount(count + 1); // Update count using state setter
  };

  const code = `
  export default function Ustate() {
  const [count, setCount] = useState(0); 
  const handleCountIncrease = () => {
    setCount(count + 1); 
  };

  return {
    <div>
        <div onClick={handleCountIncrease}>
            <span>Click me to add</span>
        </div>
        <h1>{count}</h1>
    </div>
   }
 }
 `;

  return (
    <>
    <div className='p-4'>
        <p className='pClass'><span className='spanClass'>useState: </span>
        In React, the useState hook is a fundamental tool for managing component state in functional components. 
        It allows you to create state variables within functional components, 
        similar to how <code className='bg-dark p-1'>this.state works</code> in class components. 
        State variables hold data that can change over time, triggering a re-render of the component when updated.</p>
    </div>


    <div className='d-flex flex-row justify-content-around text-center align-items center p-4'>
      <div class="box-3">
            <div onClick={handleCountIncrease} className="btn btn-scb">
                <span>Click me to add</span>
            </div>
        </div>
        <div className='text-start'><h1>{count}</h1></div>
    </div>


    <div className='d-flex flex-row'>
    <div className='p-4 mt-5 w-50 justify-content-center text-align-center'>
        <ol>
            <li>We import useState from react.</li>
            <li>Inside the Ustate component, we call useState(0).</li>
            <li>The returned array is destructured into count (current count) and setCount (setter function).</li>
            <li>The count value is initially set to 0.</li>
            <li>The button's onClick handler calls an anonymous function that updates the state using setCount(count + 1).</li>
            <li>This increments the count and triggers a re-render.</li>
        </ol>
    </div>
    <div className="p-4 w-50">
    <code className='bg-dark mb-2'><pre className='bg-dark'>{code}</pre></code>
    </div>
    </div>
    </>
  );
}
