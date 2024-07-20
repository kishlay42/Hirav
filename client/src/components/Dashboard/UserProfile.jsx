import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { signoutSuccess } from '../../redux/user/userSlice';

const UserProfile = () => {
  const menuItems = ['Account', 'Portfolio', 'Settings', 'Chat with us', 'About us', 'GCP guidelines'];
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSignout = async () => {
    try {
      const res = await fetch('/server/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <aside className="flex flex-col items-center px-20 pt-14 pb-9 w-full text-xl font-bold text-black bg-white rounded-2xl shadow-[0px_149px_41px_rgba(31,107,178,0)] max-md:px-5 max-md:mt-4 max-md:max-w-full">
      <img 
        alt='user' src={currentUser.profilePicture}
        className="max-w-full rounded-full border border-blue-600 border-solid aspect-square w-[222px]" 
      />
      <h2 className="self-stretch mt-3.5 mr-4 ml-5 text-4xl max-md:mx-2.5">{currentUser.fname}</h2>
      <p className="mt-2.5 text-xl font-medium text-neutral-500">
        <span className="italic">e-mail:</span> {currentUser.email}
      </p>
      <nav className=" max-md:mt-10">
        {menuItems.map((item, index) => (
          <a key={index} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="block mt-7">
            {item}
          </a>
        ))}
      </nav>
      <button className="justify-center px-9 py-3 mt-20 font-black text-white bg-violet-700 rounded-lg max-md:px-5 max-md:mt-10" onClick={handleSignout}>
        Log Out
      </button>
    </aside>
  );
};

export default UserProfile;