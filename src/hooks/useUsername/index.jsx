import { useEffect, useState } from 'react';
import { getUsername } from '../../services/UserDB/UserService';

export const useUsername = () => {
  //Membuat state
  const [username, setUsername] = useState('');

  //Mengambil username dari token
  useEffect(() => {
    const token = localStorage.getItem('token');

    setUsername(getUsername(token));
  }, []);

  return username;
};
