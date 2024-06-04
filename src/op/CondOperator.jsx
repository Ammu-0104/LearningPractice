import React, { useState } from 'react'

const CondOperator = () => {
    
    const [change, setchange] = useState(false);
    const handleClick=()=>{
        setchange(!change)
    }
  return (
    <div>
        <p>{change ? "chandra":"name"}</p>
        <button onClick={handleClick}>Change</button>
    </div>
  )
}

export default CondOperator