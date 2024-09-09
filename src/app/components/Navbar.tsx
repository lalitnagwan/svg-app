'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Drawer, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const router = useRouter();

  const currentUrl = usePathname();
  if (currentUrl.toLowerCase().includes('dashboard')) {
    return null;
  }

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleNavLinkClick = (path: string) => {
    setActiveLink(path);
    setOpen(false);
    router.push(path);
  };

  return (
    <Paper elevation={10}>
    <div className='navbar-height'>
      <nav className='bg-[#212ea0] shadow md:flex md:items-center md:justify-between z-20 fixed w-full'>
        <div className='flex justify-between items-center' style={{height:74}}>
          <Link href='/'>
          {/* <Paper elevation={10}> */}
            <img
              className={`inline cursor-pointer nav-logo text-white ${
                activeLink === '/industries' ? 'active-link' : ''
              }`}
              src={'/images/0001.png'}
              alt='SVG LOGO'
              onClick={() => handleNavLinkClick('/')}
            />
            {/* </Paper> */}
          </Link>
          <span className='cursor-pointer mx-2 md:hidden block'>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
              <div className='flex justify-end p-4'>
                <IconButton onClick={toggleDrawer(false)}>
                  <CloseIcon />
                </IconButton>
              </div>
              <div className='flex-row'>
                <li
                  className={`mx-4 my-6 md:my-0 list-none text-black ${
                    activeLink === '/industries' ? 'active-link' : ''
                  }`}
                >
                  <a
                    onClick={() => handleNavLinkClick('/industries')}
                    className='text-xl duration-500 cursor-pointer'
                  >
                    Services
                  </a>
                </li>
                <li
                  className={`mx-4 my-6 md:my-0 list-none text-black ${
                    activeLink === '/transportation' ? 'active-link' : ''
                  }`}
                >
                  <a
                    onClick={() => handleNavLinkClick('/transportation')}
                    className='text-xl duration-500 cursor-pointer'
                  >
                    Track Shipment
                  </a>
                </li>
                <li
                  className={`mx-4 my-6 md:my-0 list-none text-black ${
                    activeLink === '/about' ? 'active-link' : ''
                  }`}
                >
                  <a
                    onClick={() => handleNavLinkClick('/about')}
                    className='text-xl duration-500 cursor-pointer'
                  >
                    About Us
                  </a>
                </li>
                <li
                  className={`mx-4 my-6 md:my-0 list-none text-black ${
                    activeLink === '/contact' ? 'active-link' : ''
                  }`}
                >
                  <a
                    onClick={() => handleNavLinkClick('/contact')}
                    className='text-xl duration-500 cursor-pointer'
                  >
                    Contact Us
                  </a>
                </li>
                <li
                  className={`mx-4 my-6 md:my-0 list-none text-black ${
                    activeLink === '/contact' ? 'active-link' : ''
                  }`}
                >
                  <a
                    onClick={() => handleNavLinkClick('/contact')}
                    className='text-xl duration-500 cursor-pointer'
                  >
                    Enquiry
                  </a>
                </li>
                <li
                  className={`mx-4 my-6 md:my-0 list-none text-black ${
                    activeLink === '/contact' ? 'active-link' : ''
                  }`}
                >
                  <a
                    onClick={() => handleNavLinkClick('/contact')}
                    className='text-xl duration-500 cursor-pointer'
                  >
                    Career
                  </a>
                </li>

                {/* <button
                  className='font-sans duration-500 px-6 py-2 mx-4 rounded-full border-2 border-current bg-black text-white'
                  onClick={() => handleNavLinkClick('/sign-up')}
                >
                  Sign Up
                </button>
                <button
                  className='font-sans duration-500 px-6 py-2 mx-4 rounded-full border-2 border-current bg-black text-white'
                  onClick={() => handleNavLinkClick('/login')}
                >
                  Sign In
                </button> */}
              </div>
            </Drawer>
          </span>
        </div>
        <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
          <li
            className={`mx-4 my-6 md:my-0 ${
              activeLink === '/industries' ? 'active-link' : ''
            }`}
          >
            <a
              onClick={() => handleNavLinkClick('/industries')}
              className='text-xl text-white duration-500 cursor-pointer'
            >
              Industries
            </a>
          </li>
          <li
            className={`mx-4 my-6 md:my-0 ${
              activeLink === '/transportation' ? 'active-link' : ''
            }`}
          >
            <a
              onClick={() => handleNavLinkClick('/transportation')}
              className='text-xl text-white duration-500 cursor-pointer'
            >
              Track Shipment
            </a>
          </li>
          <li
            className={`mx-4 my-6 md:my-0 ${
              activeLink === '/about' ? 'active-link' : ''
            }`}
          >
            <a
              onClick={() => handleNavLinkClick('/about')}
              className='text-xl text-white duration-500 cursor-pointer'
            >
              About Us
            </a>
          </li>
          <li
            className={`mx-4 my-6 md:my-0 ${
              activeLink === '/contact' ? 'active-link' : ''
            }`}
          >
            <a
              onClick={() => handleNavLinkClick('/contact')}
              className='text-xl text-white duration-500 cursor-pointer'
            >
              Contact Us
            </a>
          </li>
          <li
            className={`mx-4 my-6 md:my-0 ${
              activeLink === '/contact' ? 'active-link' : ''
            }`}
          >
            <a
              onClick={() => handleNavLinkClick('/contact')}
              className='text-xl text-white duration-500 cursor-pointer'
            >
              Company Structure
            </a>
          </li>
          <li
            className={`mx-4 my-6 md:my-0 ${
              activeLink === '/contact' ? 'active-link' : ''
            }`}
          >
            <a
              onClick={() => handleNavLinkClick('/contact')}
              className='text-xl text-white duration-500 cursor-pointer'
            >
              Enquiry 
            </a>
          </li>
          <li
            className={`mx-4 my-6 md:my-0 ${
              activeLink === '/contact' ? 'active-link' : ''
            }`}
          >
            <a
              onClick={() => handleNavLinkClick('/contact')}
              className='text-xl text-white duration-500 cursor-pointer'
            >
              Career
            </a>
          </li>
          {/* <button
            onClick={() => handleNavLinkClick('/sign-up')}
            className='duration-500 px-6 py-2 mx-4 bg-white text-black font-sans hover:bg-black hover:text-white rounded-full border-black border-2 drop-shadow-md'
          >
            Sign Up
          </button>
          <button
            onClick={() => handleNavLinkClick('/login')}
            className='duration-500 px-6 py-2 mx-4 bg-white text-black font-sans hover:bg-black hover:text-white rounded-full border-black border-2 drop-shadow-md'
          >
            Sign In
          </button> */}
        </ul>
      </nav>
    </div>
    </Paper>
  );
}
