import React, { useState, useEffect } from 'react';

export default function Category() {
 const [message, setMessage] = useState('Custom message');

 useEffect(() => {
  console.log('Start...')
  console.log(loadPost())
  console.log('End...')
 }, []);
 
 const loadPost = async () => {
  console.log('Inside loadPost...')
  let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => response.json())
   .then(json => json)
  console.log(('After Fetch', data));
  return data;
 }

 return (
  <div>
   <input
    type="text"
    value={message}
    placeholder="Enter a message"
    onChange={e => setMessage(e.target.value)}
   />
   <p>
    <strong>{message}</strong>
   </p>
  </div>
 )
}
