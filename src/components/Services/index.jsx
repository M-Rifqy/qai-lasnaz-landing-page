import React from 'react';
import './index.css';

export default function Services() {
  return (
    <>
      <div className='flex flex-col mt-[50px] mx-3'>
        <div className='flex flex-col justify-center items-center text-center mx-3'>
          <h1 className='text-[30px] font-bold'>Layanan</h1>
          <p className='text-lg'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className='flex my-10 mx-10 md:mx-20'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 2xl:grid-cols-4 place-items-center'>
            <div className='flex flex-col gap-1 align-left p-8 rounded-xl card'>
              <img
                src={require('../../assets/ellipse1.png')}
                className='h-[35px] w-[35px]'
                alt='ellipse'
              />
              <h1 className='text-[30px] text-[#6AA915]'>Zakat</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className='flex flex-col gap-1 align-left p-8 rounded-xl card'>
              <img
                src={require('../../assets/ellipse1.png')}
                className='h-[35px] w-[35px]'
                alt='ellipse'
              />
              <h1 className='text-[30px] text-[#6AA915]'>Infaq</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className='flex flex-col gap-1 align-left p-8 rounded-xl card'>
              <img
                src={require('../../assets/ellipse1.png')}
                className='h-[35px] w-[35px]'
                alt='ellipse'
              />
              <h1 className='text-[30px] text-[#6AA915]'>Sedekah</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className='flex flex-col gap-1 align-left p-8 rounded-xl card'>
              <img
                src={require('../../assets/ellipse1.png')}
                className='h-[35px] w-[35px]'
                alt='ellipse'
              />
              <h1 className='text-[30px] text-[#6AA915]'>Wakaf</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div className='flex flex-col gap-1 align-left p-8 rounded-xl card'>
              <img
                src={require('../../assets/ellipse1.png')}
                className='h-[35px] w-[35px]'
                alt='ellipse'
              />
              <h1 className='text-[30px] text-[#6AA915]'>DSKL</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
