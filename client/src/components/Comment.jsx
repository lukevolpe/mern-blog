import { useEffect, useState } from 'react';
import moment from 'moment';

const Comment = ({ comment }) => {
  const [user, setUser] = useState({});
  console.log(user);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comment.userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [comment]);

  return (
    <div className='flex p-4 border-b dark:border-gray-600 text-sm'>
      <div className='flex mr-3 gap-1 items-center'>
        <img
          className='w-10 h-10 rounded-full bg-gray-200'
          src={user.profilePhoto}
          alt={user.username}
        />
        <div className='flex-1'>
          <div className='flex items-center mb-1'>
            <span className='font-bold mr-1 text-sm truncate'>
              {user ? `@${user.username}` : 'anonymous user'}
            </span>
            <span className='text-gray-500 text-xs'>
              {moment(comment.createdAt).fromNow()}
            </span>
          </div>
          <p className='text-gray-500 mb-2 ml-1'>{comment.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
