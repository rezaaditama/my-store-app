import Navbar from '../../components/Navbar';
import ProfileCard from '../../components/ProfileCard';
import ContactInfo from '../../components/ContactInfo';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className='pt-20 flex justify-evenly'>
        <ProfileCard className={'w-1/3'} />
        <ContactInfo className={'w-1/2'} />
      </div>
    </>
  );
};

export default AboutPage;
