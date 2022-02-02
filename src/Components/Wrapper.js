import React, { useState } from "react";

import UserContext from "./UserContext";

export default ({ children }) => {
  const [name, setName] = useState("Rihan Odeh");

  return (
    <UserContext.Provider
      value={{
        name,
        setName
      }}
    >
      {children}
    </UserContext.Provider>
  );
};