import { Button, Label, TextInput } from 'flowbite-react';
import { useSelector } from 'react-redux';

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
          <img
            src={currentUser.profilePhoto}
            alt='profile photo'
            className='rounded-full w-full h-full object-cover border-8 border-[lightgray]'
          />
        </div>
        <div className=''>
          <Label>Username</Label>
          <TextInput
            type='text'
            defaultValue={currentUser.username}
            id='username'
          />
        </div>
        <div className=''>
          <Label>Email</Label>
          <TextInput type='text' defaultValue={currentUser.email} id='email' />
        </div>
        <div className=''>
          <Label>Password</Label>
          <TextInput
            type='text'
            placeholder='Enter new password...'
            id='password'
          />
        </div>
        <Button type='submit' gradientDuoTone='purpleToBlue'>
          Update
        </Button>
      </form>
      <div className='text-red-500 flex justify-between mt-5'>
        <span className='cursor-pointer'>Delete account</span>
        <span className='cursor-pointer'>Sign out</span>
      </div>
    </div>
  );
};

export default DashProfile;
