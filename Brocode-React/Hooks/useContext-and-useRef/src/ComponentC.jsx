import React, { useContext } from "react";
import { userContext } from "./ComponentA";
import ComponentD from "./ComponentD";

function ComponentC() {
  const user = useContext(userContext);

  return (
    <>
      <div className="box">
        <h2>ComponentC</h2>
        <h3>Hlow, again {user}</h3>
        <ComponentD />
      </div>
    </>
  );
}

export default ComponentC;
