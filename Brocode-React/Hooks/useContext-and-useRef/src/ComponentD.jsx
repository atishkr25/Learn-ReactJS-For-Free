// import React, {useState} from 'react'
import { useContext } from 'react';
import React, {userContext} from'./ComponentA'

const ComponentD = () => {
  const user = useContext(userContext);

  return (
    <div>
      <div className="box">
        <h2>Component D</h2>
        <h3>bye {user}</h3>
      </div>
    </div>
  )
}

export default ComponentD
