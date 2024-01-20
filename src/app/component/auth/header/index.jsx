import React from 'react';
import { Inter, Poppins } from 'next/font/google';
import cls from 'classname';

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });
const AuthHeader = ({ title, description }) => {
  return (
    <aside className="text-center">
      <h3
        className={cls(
          'my-3 text-4xl font-bold text-[#009947]',
          poppins.className
        )}
      >
        NOVANEX HUB
      </h3>
      <p className="text-center">{title}</p>
      <p className="text-center text-sm my-3">{description}</p>
    </aside>
  );
};

export default AuthHeader;