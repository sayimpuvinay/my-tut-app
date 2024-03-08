import React, { useState, useEffect } from 'react';
import './ustate.css'; // Assuming you have CSS styles (optional)

export default function Ueffect() {
    const [name, setName] = useState(''); 
    const [message, setMessage] = useState(''); 
  
    useEffect(() => {
      setMessage({name});
    }, [name]);

    const code = 
    `
    export default function Ueffect() {
      const [name, setName] = useState(''); 
      const [message, setMessage] = useState(''); 
      useEffect(() => {
        setMessage({name});
      }, [name]);
    
      return (
        <div>
          <input type="text" value={name} onChange={(event) => 
            setName(event.target.value)}
            placeholder="Enter some text"
          />
          <p>{message}</p>
        </div>
      );
    }
                `

  return (
    <>
      <div className='p-4'>
        <p className='pClass'>
          <span className='spanClass'>useEffect: </span>
          In React, the `useEffect` hook is a powerful tool for managing side effects in functional components. It allows you to perform actions after certain events happen, such as:
          <ul>
            <li>Data fetching from APIs</li>
            <li>Setting up subscriptions or timers</li>
            <li>Updating the DOM directly</li>
          </ul>
        </p>
      </div>

      <div className='d-flex flex-row justify-content-around text-center align-items center p-4'>
        <div className='w-50'>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)}
            placeholder="Enter some text"
          />
        </div>
        <div className='w-50'>
          <p>{message.name}</p>
        </div>
      </div>

      <div className='d-flex flex-row '>
        <div className='p-4 w-50'>
          <ol>
            <li>We use `useState` to manage the count and message states.</li>
            <li>The `useEffect` hook runs after every render and updates the message when the count changes.</li>
            <li>The button's `onClick` handler calls `handleCountIncrease` to increment the count.</li>
          </ol>
        </div>
        <div className="p-4 w-50 ">
        <code className='bg-dark mb-2'><pre className='bg-dark'>{code}</pre></code>
        </div>
      </div>
    </>
  );
}
