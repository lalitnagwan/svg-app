'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Footer.css';
import { usePathname } from 'next/navigation';
// import { Paper } from '@mui/material';

export default function Footer() {
  const currentUrl = usePathname();
  if (currentUrl.toLowerCase().includes('dashboard')) {
    return null;
  }

  return (
    <div style={{ backgroundColor: 'black' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        <div style={{ paddingTop: '2%', color: 'white' }} className='font-bold'>
          {/* <Paper elevation={10}> */}
          <Image
            src={'/images/0001.png'}
            alt='SVG LOGO'
            width={100}
            height={100}
            className='footer-image'
          />
          {/* </Paper> */}
          <div>
            <p
              className='footer-text'
              style={{
                fontSize: 16,
                color: 'grey',
                marginTop: 50,
                textAlign: 'justify',
                maxWidth: 400,
              }}
            >
              A transportation and logistics community connecting transporters,
              brokers, vehicle owners and industries through mobile and web
              application.
            </p>
          </div>
        </div>
        <div style={{ paddingTop: 30 }}>
          <p style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>
            SERVICES OFFERED
          </p>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div
              className='decor-f decor-f_mod-a decor-f_mod_white'
              style={{ marginLeft: -20 }}
            ></div>
            <div
              className='decor-g decor-g_mod-a decor-g_mod_white'
              style={{ marginLeft: -10 }}
            ></div>
          </div>

          <div style={{ marginTop: 20 }}>
            <Link
              href='/packers-movers'
              style={{
                fontSize: 16,
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Packers & Movers
            </Link>{' '}
          </div>

          <div style={{ marginTop: 5 }}>
            {' '}
            <Link
              href='/transportation'
              style={{ fontSize: 16, color: 'white', textDecoration: 'none' }}
            >
              Transportation
            </Link>{' '}
          </div>

          <div style={{ marginTop: 5 }}>
            {' '}
            <Link
              href='/supply-chain'
              style={{ fontSize: 16, color: 'white', textDecoration: 'none' }}
            >
              Supply Chain
            </Link>{' '}
          </div>

          <div style={{ marginTop: 5 }}>
            {' '}
            <Link
              href='/full-load'
              style={{ fontSize: 16, color: 'white', textDecoration: 'none' }}
            >
              Full Truck Load
            </Link>{' '}
          </div>

          <div style={{ marginTop: 5 }}>
            {' '}
            <Link
              href='/part-load'
              style={{ fontSize: 16, color: 'white', textDecoration: 'none' }}
            >
              Part Truck Load
            </Link>{' '}
          </div>

          <div style={{ marginTop: 5 }}>
            {' '}
            <Link
              href='/warehouse'
              style={{ fontSize: 16, color: 'white', textDecoration: 'none' }}
            >
              Warehousing
            </Link>
          </div>
        </div>
        <div style={{ paddingTop: 30 }}>
          <p
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: 'white',
            }}
          >
            QUICK LINKS
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              className='decor-f decor-f_mod-a decor-f_mod_white'
              style={{ marginLeft: -20 }}
            ></div>
            <div
              className='decor-g decor-g_mod-a decor-g_mod_white'
              style={{ marginLeft: -10 }}
            ></div>
          </div>
          <div>
            <div style={{ marginTop: 20 }}>
              <Link
                href='/'
                style={{ fontSize: 16, color: 'white', textDecoration: 'none' }}
              >
                Home
              </Link>
            </div>

            <div style={{ marginTop: 5 }}>
              <Link
                href='/what-we-do'
                style={{ fontSize: 16, color: 'white', textDecoration: 'none' }}
              >
                What We Do
              </Link>
            </div>
            <div style={{ marginTop: 5 }}>
              <Link
                href='/industries'
                style={{ fontSize: 16, color: 'white', textDecoration: 'none' }}
              >
                Industries
              </Link>
            </div>
            <div style={{ marginTop: 5 }}>
              <Link
                href='/our-network'
                style={{ fontSize: 16, color: 'white', textDecoration: 'none' }}
              >
                Our Network
              </Link>
            </div>
            <div style={{ marginTop: 5 }}>
              <Link
                href='/contact'
                style={{ fontSize: 16, color: 'white', textDecoration: 'none' }}
              >
                Contact us
              </Link>
            </div>
            <div style={{ marginTop: 5 }}>
              <Link
                href='/about'
                style={{ fontSize: 16, color: 'white', textDecoration: 'none' }}
              >
                About us
              </Link>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 30 }}>
          <p
            // style={{
            //   fontWeight: 'bold',
            //   fontSize: 18,
            //   color: 'white',
            // }}
            className='footer-mobile'
          >
            CONTACT DETAILS
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              className='decor-f decor-f_mod-a decor-f_mod_white'
              style={{ marginLeft: -20 }}
            ></div>
            <div
              className='decor-g decor-g_mod-a decor-g_mod_white'
              style={{ marginLeft: -10 }}
            ></div>
          </div>
          <div className='contact-text'>
            <div style={{ marginTop: 20 }}>
              <text
                style={{
                  fontSize: 16,
                  color: 'grey',
                  fontWeight: 'bold',
                }}
              >
                SVG Express Private Limited
              </text>
            </div>

            <div style={{ marginTop: 5 }}>
              <text style={{ fontSize: 16, color: 'grey' }}>
                Plot No-62, Lane No-2, Gopalbari 
              </text>
            </div>
            <div>
              <text style={{ fontSize: 16, color: 'grey' }}>
              Jaipur 302001
              </text>
            </div>
            <div style={{ marginTop: 5 }}>
              <text style={{ fontSize: 16, color: 'grey' }}>
                {' '}
                Tel: (+91)0141-6620400
              </text>
            </div>
            <div style={{ marginTop: 5 }}>
              <text style={{ fontSize: 16, color: 'grey' }}>
                Phone: (+91)0141-6620500
              </text>
            </div>
            <div style={{ marginTop: 5 }}>
              <text style={{ fontSize: 16, color: 'grey' }}>
                Email: hr@svgjpr.com
              </text>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div
        className='last-footer-box'
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          paddingBottom: 15,
        }}
      >
        <div className='copyright__inner' style={{ color: 'grey' }}>
          © {new Date().getFullYear()} Transport All rights reserved.
        </div>

        <div>
          <Link href='/'>Terms of Use</Link>|
          <Link href='/'>Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
