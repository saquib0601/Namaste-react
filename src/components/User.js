import React, { useState } from 'react'

const User = ({name,location}) => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
        <h2>Count : {count}</h2>
        <button onClick={()=> {
          setCount(count + 1)
        }}
        >Count Increase</button>
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h2>Contact : @saquib0601</h2>
      </div>
  )
}

export default User;
