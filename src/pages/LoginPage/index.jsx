import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import AuthRedirect from '../../components/AuthRedirect';

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('username', e.target.username.value);
    localStorage.setItem('password', e.target.password.value);
    window.location.href = '/product';
  };
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Form className={'space-y-4'} onSubmit={handleLogin}>
        <h1 className='text-xl font-bold text-center'>Login</h1>
        <Input
          label={'Username'}
          id={'username'}
          placeholder='Masukkan Username'
          type={'text'}
        />
        <Input
          label={'Password'}
          id={'password'}
          placeholder='Masukkan Password'
          type={'password'}
        />
        <Button
          className={'bg-blue-600 hover:bg-blue-700 text-white w-full py-2'}
          type={'submit'}
        >
          Submit
        </Button>
        <AuthRedirect type='login' />
      </Form>
    </div>
  );
};

export default LoginPage;
