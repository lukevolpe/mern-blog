import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (ev) => {
    setFormData({ ...formData, [ev.target.id]: ev.target.value.trim() });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setError('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setError(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

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
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your username' className='dark:text-black' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your email' className='dark:text-black' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Your password' className='dark:text-black' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign up'
              )}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Already have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign in
            </Link>
          </div>
          {error && (
            <Alert className='mt-5' color='failure'>
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
