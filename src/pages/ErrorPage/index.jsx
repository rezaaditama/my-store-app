const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-3xl font-bold text-gray-800 mb-4'>
        404 - Page Not Found
      </h1>
      <p className='text-lg text-gray-600'>
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default ErrorPage;
