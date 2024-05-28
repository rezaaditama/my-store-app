import axios from 'axios';

//Fetching data dari API menggunakan Axios
export const getProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    console.log(`error : ${error}`);
    return [];
  }
};
