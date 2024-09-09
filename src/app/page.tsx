import React from 'react';
import { Call } from '@mui/icons-material';
import { ShoppingCart } from '@mui/icons-material';
// import Carousel from './components/Carousel/Carousel';
// import AutoplayCarousel from './components/ClientCarouselHomePage/AutoplayCarousel';
import './home.css';
import Link from 'next/link';
import Carousel from './components/corosel/Corosel';
import Navbar from './components/Navbar';
import Footer from './components/footer/Footer';
import AutoplayCarousel from './components/clientCarousel/AutoplayCarousel';

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Carousel />

      </div>
      <div style={{marginTop:30, marginLeft:20, marginRight:20}}>
      <span className='font-bold'>E-Governance / E-Com Delivery partner company</span>&nbsp;
      SVG Express Services, founded in 2002, began with just two offices in Jaipur, Rajasthan. Over the years, it has grown into one of the largest service partners in the telecom and banking sectors across Rajasthan. The company provides comprehensive services to all major telecom service providers, the Department of Information Technology (DOIT), leading banks, and Direct-to-Home (DTH) operators in the state. With a strong presence in 8 zones, 40 branch offices, and a workforce of over 3,000 employees and associates, SVG Express Services continues to be a trusted partner in delivering excellence across various industries in Rajasthan. 
      </div>
      <div style={{marginTop:20, marginRight:20, marginLeft:20}}>
      We are a technology-driven organization dedicated to building India’s largest network of last-mile retail outlets. Our mission is to empower every Indian by facilitating access to financial inclusion, social inclusion, Digital India initiatives, skill development, employment opportunities, government programs, and essential goods and services.

SVG Express Services efficiently delivers e-governance solutions to millions of citizens across more than 673 cities and 8,000 business locations through a robust network. We work closely with various government departments in India to ensure transparency and efficiency in service delivery.

Our online platform provides real-time tracking access to over 3,000 distributors. We offer comprehensive IT infrastructure and logistics support, enabling us to establish client-specific infrastructure and modules in the shortest possible time. Our capabilities extend to warehouse management of documents and hardware, distribution of POP and SIM/RCV materials to telecom channel partners, and daily field operations that reach over 2,000 locations, covering more than 5,000 distributors. Additionally, we manage our own distribution network of 400+ distributors for brands like Hitachi and Super General.
      </div>
      <div style={{marginTop:20, marginLeft:20, marginRight:20}}>
      <span className='font-bold'>Our esteemed services, which have become your go-to solutions,</span>&nbsp; have undergone a remarkable transformation over the years. What began as non-exclusive stores offering a single line of services has evolved into a network of multi-specialty, exclusive stores providing a diverse range of services. This evolution has cemented our enviable presence in the marketplace.

Similarly, the company itself has advanced significantly, transitioning from an e-governance provider and systems integrator to a distinguished leader in the industry, offering a unique and best-in-class retail-led agency model.
      </div>
      <div
        className='flex-top-name'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '6%',
          marginBottom: '5%',
        }}
      >
        <div>
          <text style={{ fontSize: 20, letterSpacing: 6 }}>
            Domestic freight and{' '}
          </text>
        </div>
        <div>
          <text style={{ fontSize: 35, fontWeight: 'bold' }}>
            Our Services
          </text>
        </div>
        <div>
          <ShoppingCart />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        <div className='service-box'>
          <div
            style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
          >
            <h1 style={{ fontSize: 15 }}>SERVICES 1</h1>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <text style={{ padding: 20, fontSize: 15, color: '#555555' }}>
              Surface transportation is the transportation done by land
              resources. The two modes used for road transportation is road and
              rail. Road
            </text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <text>-----------</text>
          </div>
          <div
            style={{ marginTop: 5, display: 'flex', justifyContent: 'center' }}
          >
            <Link
              href='/transportation'
              style={{ color: 'black', textDecoration: 'none' }}
            >
              {' '}
              READ MORE{' '}
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 40,
            }}
          >
            <text>-----------</text>
          </div>
        </div>
        <div className='service-box'>
          <div
            style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
          >
            <h1 style={{ fontSize: 15 }}>SERVICES 2</h1>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <text style={{ padding: 20, fontSize: 15, color: '#555555' }}>
              Our associated service partner are leaders in Warehousing, C&FA,
              Distribution, Supply & Chain Management, 3PL/4PL, Reverse
            </text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <text>-----------</text>
          </div>
          <div
            style={{ marginTop: 5, display: 'flex', justifyContent: 'center' }}
          >
            <Link
              href='/warehouse'
              style={{ color: 'black', textDecoration: 'none' }}
            >
              {' '}
              READ MORE
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 40,
            }}
          >
            <text>-----------</text>
          </div>
        </div>
        <div className='service-box'>
          <div
            style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
          >
            <h1 style={{ fontSize: 15 }}>SERVICES 3</h1>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <text style={{ padding: 20, fontSize: 15, color: '#555555' }}>
              You can put your mind at ease with TRANSITPLUS GLOBAL, when
              youentrust your cargo to us. We treat each cargo as our own.{' '}
            </text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <text>-----------</text>
          </div>
          <div
            style={{ marginTop: 5, display: 'flex', justifyContent: 'center' }}
          >
            <Link
              href='/full-truck-load'
              style={{ color: 'black', textDecoration: 'none' }}
            >
              {' '}
              READ MORE{' '}
            </Link>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 40,
            }}
          >
            <text>-----------</text>
          </div>
        </div>
      </div>
      <div
        className='section-area'
        style={{
          backgroundColor: 'rgb(115 165 255)',
          marginTop: 50,
          height: 350,
          position: 'relative',
        }}
      >
        <div
          className='word'
          style={{ display: 'flex', justifyContent: 'flex-start', top: 50 }}
        >
          <h3
            style={{
              fontSize: 40,
              color: 'white',
              marginTop: '5%',
              marginLeft: '6%',
            }}
          >
            Call Now !
          </h3>
        </div>
        <div>
          <div className='ctan-bg'></div>
          <div className='ctan-button'>
            <Link href='tel:9999999999'>
              <Call style={{ color: 'white' }} />
            </Link>
          </div>

          <p className='number-tap'>9999999999</p>
        </div>
        <div className='loop-wrapper'>
          <div className='mountain'></div>
          <div className='hill'></div>
          <div className='tree'></div>
          <div className='tree'></div>
          <div className='tree'></div>
          <div className='rock'></div>
          <div className='truck'></div>
          <div className='wheels'></div>
        </div>
      </div>
      <div
        className='flex-top-name'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 50,
          marginBottom: 50,
          borderBottom: '1px dotted',
        }}
      >
        <text style={{ fontSize: 25, letterSpacing: 6 }}>Clientele</text>
        {/* <AutoplayCarousel /> */}
        <AutoplayCarousel />
      </div>
      <div className='truck-contact1'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <text
            style={{ fontSize: '3vh', fontWeight: 'bold', color: '#ff690f' }}
          >
            {' '}
            <Call style={{ fontSize: '40', color: 'orange' }} /> (+91)0141-6620400{' '}
          </text>

          <text style={{ fontSize: '3vh', fontWeight: 'bold' }}>
            {' '}
            We are open 24/7 for assistance{' '}
          </text>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
