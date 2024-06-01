import { Link } from 'react-router-dom';
import Button from '../Button';
import LogoutIcon from '../../../public/assets/svg/LogoutIcon';
import NavbarIcon from '../../../public/assets/svg/NavbarIcon';
import CartIcon from '../../../public/assets/svg/CartIcon';
import { useUsername } from '../../hooks/useUsername';

const Navbar = () => {
  //Handle Logout
  const handlelogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  //Get Username from token
  const username = useUsername();

  return (
    <nav className='bg-gray-800 flex py-4 justify-between px-4 lg:px-20 fixed w-full'>
      <div className='font-bold text-white text-xl'>
        <h1 className='capitalize'>{username}</h1>
      </div>
      <div className='flex flex-wrap space-x-4'>
        <div className='space-x-4 font-semibold text-white hidden md:block'>
          <Link to='/product'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='#'>Services</Link>
          <Link to='#'>Contact</Link>
        </div>
        <div className='hidden md:block'>
          <Button
            type='button'
            onClick={(e) => {
              handlelogout(e);
            }}
          >
            <LogoutIcon />
          </Button>
        </div>
      </div>
      {/* resposive */}
      <div className='md:hidden block'>
        <Button className='text-white focus:outline-none' type='button'>
          <NavbarIcon />
        </Button>
        <Button className='text-white focus:outline-none' type='button'>
          <CartIcon />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
