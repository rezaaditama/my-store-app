import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

//Post data user
export const getUserLogin = async (username, password) => {
  try {
    const response = await axios.post('https://fakestoreapi.com/auth/login', {
      username,
      password,
    });
    return response.data.token;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

//Decode Token
export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
};
