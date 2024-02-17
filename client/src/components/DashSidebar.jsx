import { Button, Modal, Sidebar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { HiArrowSmRight, HiDocumentText, HiUser } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { signOutSuccess } from '../redux/user/userSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const DashSidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  const [tab, setTab] = useState('');
  const [showSignOutModal, setShowSignOutModal] = useState(false);

  const handleSignOut = async (ev) => {
    setShowSignOutModal(false);
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signOutSuccess());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <>
      <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
          <Sidebar.ItemGroup className='flex flex-col gap-0.5'>
            <Link to='/dashboard?tab=profile'>
              <Sidebar.Item
                active={tab === 'profile'}
                icon={HiUser}
                label={currentUser.isAdmin ? 'Admin' : 'User'}
                labelColor='dark'
                as='div'
              >
                Profile
              </Sidebar.Item>
            </Link>
            {currentUser.isAdmin && (
              <Link to='/dashboard?tab=posts'>
                <Sidebar.Item
                  active={tab === 'posts'}
                  icon={HiDocumentText}
                  as='div'
                >
                  Posts
                </Sidebar.Item>
              </Link>
            )}
            <Sidebar.Item
              icon={HiArrowSmRight}
              onClick={() => setShowSignOutModal(true)}
              className='cursor-pointer'
            >
              Sign out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <Modal
        show={showSignOutModal}
        onClose={() => setShowSignOutModal(false)}
        popup
        size='md'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto' />
            <h3 className='mb-5 text-lg text-gray-500 dark:text-gray-400'>
              Are you sure you want to sign out?
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={handleSignOut}>
                Yes, I'm sure
              </Button>
              <Button color='gray' onClick={() => setShowSignOutModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DashSidebar;
