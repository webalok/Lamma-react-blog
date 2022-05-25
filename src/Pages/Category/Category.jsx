import React, { useState, useEffect } from 'react';

export default function Category() {
 const [message, setMessage] = useState('Custom message');

 useEffect(() => {
  console.log('Start...')
  const loadPost = async () => {
   console.log('Inside loadPost...')
   let data = await fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => json)
   console.log(('After Fetch', data));
   return data;
  }

  console.log(loadPost())
  console.log('End...')
 }, []);

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
