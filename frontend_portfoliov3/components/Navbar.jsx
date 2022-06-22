import React from 'react';
import images from '../constants/images';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="john thiong/'o" />
      </div>
    </nav>
  );
};

export default Navbar;
