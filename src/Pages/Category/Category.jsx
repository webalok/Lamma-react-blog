import React, { useState, useEffect } from 'react';

export default function Category() {
 const [message, setMessage] = useState('Custom message');

 useEffect(() => {

 }, []);

 return (
  <div>
   {console.log('rerender')}
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
