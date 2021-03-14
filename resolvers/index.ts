import React from 'react';
import {
  ADD_USER,
  DELETE_USER,
  IS_LOGGED_IN,
  SET_ERROR,
  SET_USERS,
} from '../actions';
import { IUser } from '../models/users.interface';
import { IActions } from '../reducers';

export const setUsers = async (
  response: IUser[],
  dispatch: React.Dispatch<IActions>
) => {
  dispatch({
    type: SET_USERS,
    payload: response,
  });
};

export const addUser = (user: IUser, dispatch: React.Dispatch<IActions>) => {
  dispatch({
    type: ADD_USER,
    payload: user,
  });
};

export const deleteUser = (id: string, dispatch: React.Dispatch<IActions>) => {
  dispatch({
    type: DELETE_USER,
    payload: id,
  });
};

export const setError = (error: string, dispatch: React.Dispatch<IActions>) => {
  dispatch({
    type: SET_ERROR,
    payload: error,
  });
};

export const setIsLoggedIn = (
  isLoggedIn: boolean,
  dispatch: React.Dispatch<IActions>
) => {
  dispatch({
    type: IS_LOGGED_IN,
    payload: isLoggedIn,
  });
};
