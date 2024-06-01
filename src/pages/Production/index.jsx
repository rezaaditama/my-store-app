import { useEffect, useState } from 'react';
import { getDataUser } from '../../services/UserDB/UserService';

const Index = () => {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataUser();
        setDataUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=''>
      {dataUser.map((user, index) => {
        return (
          <div key={index}>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
