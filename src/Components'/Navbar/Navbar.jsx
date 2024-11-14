import React from 'react';

const Navbar = ({ toggleLoginPopup }) => {
  return (
    <main>
      <nav className='shadow-lg bg-transparent'>
        <div className='container flex justify-between items-center'>
          {/* Logo Section */}
          <a href="#" className='text-3xl font-bold text-white'>Logo</a>
          {/* Menu Section */}
          <div className='hidden md:block'>
            <ul className='flex justify-center items-center font-semibold gap-4'>
              <li><a href="#" className='text-white hover:text-blue-200 inline-block px-4 py-4 select-none'>Home</a></li>
              <li><a href="#" className='text-white hover:text-blue-200 inline-block px-4 py-4 select-none'>About</a></li>
              <li><a href="#" className='text-white hover:text-blue-200 inline-block px-4 py-4 select-none'>Contact</a></li>
              <li onClick={toggleLoginPopup}>
                <a href="javascript:void(0)" className='text-white hover:text-blue-200 inline-block px-4 py-4 select-none'>
                  Login
                </a>
              </li>
              <li><a href="#" className='text-white hover:text-blue-200 inline-block px-4 py-4 select-none'>Signup</a></li>
            </ul>
          </div>

          <div className='md:hidden'>
            <button onClick={toggleLoginPopup} className='text-xl font-semibold text-white px-4 py-4'>
              Login
            </button>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
