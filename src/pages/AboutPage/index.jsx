import Navbar from '../../components/Navbar';
import ProfileCard from '../../components/ProfileCard';
import ContactInfo from '../../components/ContactInfo';
import { useAuth } from '../../hooks/useAuth';
import { useUsername } from '../../hooks/useUsername';
import { useEffect, useState } from 'react';
import { getDataUser } from '../../services/UserDB/UserService';

const AboutPage = () => {
  const [dataUser, setDataUser] = useState([]);

  //Memeriksa Token menggunakan custom hooks
  const isAuthenticated = useAuth();

  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const data = await getDataUser();
        setDataUser(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchDataUser();
  }, []);

  //Mengambil nama user
  const username = useUsername();

  //Jika tidak ada token maka kembalikan null
  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className='min-h-screen lg:flex justify-center items-center space-x-5 block'>
        <ProfileCard className={'lg:w-1/3'} name={username} />
        <ContactInfo className={'lg:w-1/2'}>
          {dataUser.map((data) => {
            const user = data.username == username;

            return user ? (
              <ContactInfo.Items
                key={data.id}
                name={`${data.name.firstname} ${data.name.lastname}`}
                username={data.username}
                email={data.email}
                phone={data.phone}
                address={`${data.address.street} No. ${data.address.number},  Kota ${data.address.city}`}
              />
            ) : null;
          })}
        </ContactInfo>
      </div>
    </>
  );
};

export default AboutPage;
