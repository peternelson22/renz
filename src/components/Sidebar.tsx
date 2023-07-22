'use client';

import * as EmailValidator from 'email-validator';
import {
  BsFillChatLeftDotsFill,
  BsSearch,
  BsThreeDotsVertical,
} from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { auth } from '../../firebase';

const Sidebar = () => {
  const createChat = () => {
    const input = prompt('Enter an email address of the user');
    if (!input) return;

    if (EmailValidator.validate(input)) {
      //add chats to db
    }
  };

  return (
    <aside className='bg-white'>
      <header className='p-3 flex items-center justify-between h-16 border-b border-solid border-gray-100 z-10 sticky top-0 bg-white'>
        <button onClick={() => auth.signOut()}>
          <FaUserCircle className='text-slate-500 cursor-pointer text-2xl hover:opacity-80 hover:scale-105' />
        </button>
        <div className='flex items-center cursor-pointer space-x-4'>
          <BsFillChatLeftDotsFill className='text-slate-500 hover:text-slate-400' />
          <BsThreeDotsVertical className='text-slate-500 hover:text-slate-400' />
        </div>
      </header>
      <div className='flex items-center p-3 rounded-md space-x-2'>
        <BsSearch className='text-gray-500' />
        <input
          type='text'
          placeholder='Search in chats...'
          className='outline-0 border-none flex-1 placeholder:text-sm placeholder:tracking-widest placeholder:text-gray-600'
        />
      </div>
      <div className='p-1 hover:bg-slate-100 border-b border-t border-gray-100 shadow-sm  transition duration-150 ease-out'>
        <button
          onClick={createChat}
          className='w-full text-slate-500 tracking-wider uppercase text-sm'
        >
          Start a new chat
        </button>
      </div>
      {/* lists of chats */}
    </aside>
  );
};
export default Sidebar;
