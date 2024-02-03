import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* Left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-3xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg text-white'>
              Fox
            </span>{' '}
            <span className='dark:text-black'>Blog</span>
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can sign up with an email and password,
            or login with Google.
          </p>
        </div>
        {/* Right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your username' className='dark:text-black' />
              <TextInput type='text' placeholder='Username' id='username' />
            </div>
            <div>
              <Label value='Your email' className='dark:text-black' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
              />
            </div>
            <div>
              <Label value='Your password' className='dark:text-black' />
              <TextInput type='password' placeholder='Password' id='password' />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Already have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
