//setup layer
//We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

//This is data layer
export const StateContext = createContext();

//Build a provider

export const StateProvier = ({ reducer, initialState, children }) => (
<StateContext.Provider value = { useReducer(reducer, initialState)}>
  {children}
</StateContext.Provider>
)

//This is how we use inside of a component

export const useStateValue = () => useContext(StateContext)