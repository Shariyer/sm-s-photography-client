/** @format */

import React, { createContext } from "react";
export const authContext = createContext();
const ContextProvider = ({ children }) => {
  const info = {};
  return <authContext.Provider value={info}>{children}</authContext.Provider>;
};

export default ContextProvider;
