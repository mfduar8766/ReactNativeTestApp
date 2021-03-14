import React, { createContext, useReducer } from 'react';
import { IAppState } from '../models/appState.interface';
import { AppReducer } from '../reducers/index';

const initialState: IAppState = {
  users: [],
  error: '',
  isLoggedIn: false,
};

export const DispatchContext = createContext<any>({});
export const StateContext = createContext(initialState);

// const ComposeProvider = ({ contexts, children }) => {
//   return contexts.reduceRight((kids, parent) => cloneElement(parent, {
//     children: kids,
//   }), children)
// }

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

// export const GlobalState = {
//   StateContext,
//   DispatchContext,
//   GlobalProvider,
// };

// const providers = [<GlobalState.GlobalProvider />];
// const Store = ({ children }: any) => {
//   return providers.reduceRight(
//     (child, parent) => React.cloneElement(parent, { child }),
//     children
//   );
// };

// export { Store };
