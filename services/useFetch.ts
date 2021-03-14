import { useState, useEffect } from 'react';
import axios from 'axios';
import { IUser, IUsers } from '../models/users.interface';

const UseFetch = (url: string) => {
  const [data, setData] = useState<IUser[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  useEffect(() => {
    const userInfo = async () => {
      try {
        const response = await axios.get<any, IUsers>(url);
        if (response.status === 200 && response.data.results.length) {
          const modefiedUser = response.data.results.map(
            (user: IUser, index: number) => ({
              ...user,
              Key: index,
            })
          );
          setData(modefiedUser);
        }
      } catch (error) {
        setErrorMessage(error);
      }
    };
    userInfo();
  }, []);
  return { data, errorMessage };
};

export default UseFetch;
