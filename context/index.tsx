import React, { createContext, useReducer } from 'react';
import { IAppState } from '../models/appState.interface';
import { AppReducer } from '../reducers/index';

const initialState: IAppState = {
  users: [],
  error: '',
  isLoggedIn: false,
  notifications: [],
};

export const DispatchContext = createContext<any>({});
export const StateContext = createContext(initialState);

const GlobalProvider = ({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default GlobalProvider;
