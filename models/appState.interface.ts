import { IUser, INotifications } from './users.interface';

export interface IAppState {
  users: IUser[];
  error: string;
  isLoggedIn: boolean;
  notifications: INotifications[];
}
