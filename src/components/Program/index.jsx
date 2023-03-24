import React from 'react';

export default function Program() {
  return (
    <>
      <div className='bg-[#6AA915] flex flex-col justify-center items-center px-10 md:px-20 py-10'>
        <div className='flex flex-col justify-center items-center text-center text-[#D9D9D9]'>
          <h1 className='font-semibold text-[32px]'>Program QAI</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10 place-self-center'>
          <div className='flex flex-col gap-1 align-left p-8 rounded-xl text-white'>
            <img
              src={require('../../assets/ellipse2.png')}
              className='h-[40px] w-[40px]'
              alt='ellipse'
            />
            <h1 className='text-[32px]'>Sosial</h1>
            <p className='text-[12px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className='flex flex-col gap-1 align-left p-8 rounded-xl text-white'>
            <img
              src={require('../../assets/ellipse2.png')}
              className='h-[40px] w-[40px]'
              alt='ellipse'
            />
            <h1 className='text-[32px]'>Keagamaan</h1>
            <p className='text-[12px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className='flex flex-col gap-1 align-left p-8 rounded-xl text-white'>
            <img
              src={require('../../assets/ellipse2.png')}
              className='h-[40px] w-[40px]'
              alt='ellipse'
            />
            <h1 className='text-[32px]'>Kemanusian</h1>
            <p className='text-[12px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
