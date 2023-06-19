import React, { useEffect, useState } from 'react';

const ImageComponent = () => {
  const [profileImageSrc, setProfileImageSrc] = useState('');

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('user'));
    if (userDetails) {
      const firstLetter = userDetails?.email?.slice(0, 1).toUpperCase();
      console.log(firstLetter);
      setProfileImageSrc(firstLetter);
    }
  }, []);

  return (
   <div className='flex items-center justify-center mt-[2px] font-semibold text-white text-opacity-50 text-lg'>
    <span className=''>{profileImageSrc}</span>
   </div>
  );
};

export default ImageComponent;