import { Button } from 'flowbite-react';

const CallToAction = () => {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
      {/* Left side */}
      <div className='flex-1 justify-center flex flex-col'>
        <h2 className='text-2xl'>Want to learn more?</h2>
        <p className='text-gray-500 my-2'>Check out these resources</p>
        <Button gradientDuoTone='purpleToPink'>
          <a
            href='https://www.google.co.uk'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn more
          </a>
        </Button>
      </div>
      {/* Right side */}
      <div className='p-7 flex-1'>
        <img
          className='rounded-lg'
          src='https://www.techsmith.com/blog/wp-content/uploads/2022/03/resize-image.png'
        />
      </div>
    </div>
  );
};

export default CallToAction;
