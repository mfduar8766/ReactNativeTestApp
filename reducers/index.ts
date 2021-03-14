import { ADD_USER, DELETE_USER, IS_LOGGED_IN, SET_ERROR, SET_USERS } from '../actions';
import { IAppState } from '../models/appState.interface';
import { IUser } from '../models/users.interface';

export interface IActions {
  type: string;
  payload: any;
}

export const AppReducer = (state: IAppState, action: IActions): IAppState => {
  const { type, payload } = action;
  switch (type) {
    case IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: payload,
      };
    case SET_USERS:
      return {
        ...state,
        users: payload,
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((todo: IUser) => todo.id !== payload),
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return { ...state };
  }
};
