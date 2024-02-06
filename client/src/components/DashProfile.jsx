import { Alert, Button, Label, TextInput } from 'flowbite-react';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase.js';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [fileUploadProgress, setFileUploadProgress] = useState(null);
  const [fileUploadProgressError, setFileUploadProgressError] = useState(null);

  console.log(fileUploadProgress, fileUploadProgressError);

  const filePickerRef = useRef();

  const handleImageChange = (ev) => {
    const file = ev.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  // Handles uploading the image to Firebase storage
  const uploadImage = async () => {
    console.log('uploading image...');
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setFileUploadProgressError('Error uploading image (file must be < 2MB');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
        });
      }
    );
  };

  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          ref={filePickerRef}
          hidden
        />
        <div
          className='relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'
          onClick={() => filePickerRef.current.click()}
        >
          {fileUploadProgress && (
            <CircularProgressbar
              value={fileUploadProgress || 0}
              text={`${fileUploadProgress}%`}
              strokeWidth={5}
              styles={{
                root: {
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                },
                path: {
                  stroke: `rgba(62,152,199, ${fileUploadProgress / 100})`,
                },
              }}
            />
          )}
          <img
            src={imageFileUrl || currentUser.profilePhoto}
            alt='profile photo'
            className='rounded-full w-full h-full object-cover border-8 border-[lightgray]'
          />
        </div>
        {fileUploadProgressError && (
          <Alert color='failure'>{fileUploadProgressError}</Alert>
        )}
        <div>
          <Label>Username</Label>
          <TextInput
            type='text'
            defaultValue={currentUser.username}
            id='username'
          />
        </div>
        <div>
          <Label>Email</Label>
          <TextInput type='text' defaultValue={currentUser.email} id='email' />
        </div>
        <div>
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
