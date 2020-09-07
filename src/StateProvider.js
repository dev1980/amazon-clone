//setup layer
//We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

//This is data layer
export let StateContext = createContext();

//Build a provider

export const StateProvier = ({children, reducer, initialState}) => {

  let mainReducer = useReducer(reducer, initialState);
  return <StateContext.Provider value={mainReducer}>
      {children}
      </StateContext.Provider>
}

//This is how we use inside of a component

const [state, dispatch] = useContext(StateContext);