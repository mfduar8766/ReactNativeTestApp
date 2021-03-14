import { IUser } from './users.interface';

export interface IAppState {
  users: IUser[];
  error: string;
  isLoggedIn: boolean;
}
