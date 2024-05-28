import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import AuthRedirect from '../../components/AuthRedirect';
import { useEffect, useRef, useState } from 'react';
import { getUserLogin } from '../../services/AuthtDB/UserService';

const LoginPage = () => {
  //Membuat state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState('');

  //Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userLogin = await getUserLogin(username, password);
      localStorage.setItem('token', userLogin);
      window.location.href = '/product';
    } catch (error) {
      setLoginFailed(error.message);
    }
  };

  //Manipulasi DOM
  const inputUsername = useRef(null);
  useEffect(() => {
    inputUsername.current.focus();
  }, []);

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Form className={'space-y-4'} onSubmit={handleLogin}>
        <h1 className='text-xl font-bold text-center'>Login</h1>
        <Input
          label={'Username'}
          id={'username'}
          placeholder='Masukkan Username'
          type={'text'}
          ref={inputUsername}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label={'Password'}
          id={'password'}
          placeholder='Masukkan Password'
          type={'password'}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className={'bg-blue-600 hover:bg-blue-700 text-white w-full py-2'}
          type={'submit'}
        >
          Submit
        </Button>
        {loginFailed && (
          <div className='text-center text-red-600 font-semibold'>
            {loginFailed}
          </div>
        )}
        <AuthRedirect type='login' />
      </Form>
    </div>
  );
};

export default LoginPage;
