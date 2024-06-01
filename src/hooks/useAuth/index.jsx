import { useEffect, useState } from 'react';

export const useAuth = () => {
  //Membuat state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //Membuat custom hooks verifikasi melalui token
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/';
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  return isAuthenticated;
};
