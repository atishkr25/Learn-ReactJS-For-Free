import React, { useState, createContext } from 'react';
import ComponentB from './ComponentB';

export const userContext = createContext();

const ComponentA = () => {
  const [user, setUser] = useState("atish");

  return (
    <>
      <div className="box">
        <h2>ComponentA</h2>
        <h3>hello {user}</h3>
        
        <userContext.Provider value={user}>
          <ComponentB />
        </userContext.Provider>

      </div>
    </>
  );
};

export default ComponentA;
