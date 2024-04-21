import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import AuthRedirect from '../../components/AuthRedirect';

const RegisterPage = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Form className={'space-y-4'}>
        <h1 className='text-xl font-bold text-center '>Register</h1>
        <Input
          label={'Username'}
          id={'username'}
          placeholder={'Masukkan Username'}
          type={'text'}
        />
        <Input
          label={'Password'}
          id={'password'}
          placeholder={'Masukkan Password'}
          type={'password'}
        />
        <Input
          label={'Verifikasi Password'}
          id={'verifikasi'}
          placeholder={'Verifikasi Password'}
          type={'password'}
        />
        <Button
          className={'bg-blue-600 hover:bg-blue-700 text-white w-full py-2'}
        >
          Submit
        </Button>
        <AuthRedirect type='register' />
      </Form>
    </div>
  );
};

export default RegisterPage;
