import React from 'react';

export default function footer() {
  return (
    <>
      <div className='bg-[#264300] px-20 py-10'>
        <div className='py-5'>
          <img src={require('../../assets/logo.png')} alt='logo' />
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-10'>
          <div className='flex flex-col text-white text-[14px] gap-2'>
            <h5 className='font-semibold'>LAZNAS</h5>
            <p className='align-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut
              aliquam repellat saepe! Beatae veniam aliquid animi. Esse,
              cupiditate. Numquam animi praesentium omnis amet enim
              necessitatibus explicabo? Rem, voluptate voluptas?
            </p>
          </div>
          <div className='flex flex-col text-white text-[14px] gap-2'>
            <h5 className='font-semibold'>ALamat Pusat</h5>
            <p className='align-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ut
              aliquam repellat saepe! Beatae veniam aliquid animi.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center text-white gap-5'>
            <div>
              <h5 className='text-[14px] font-semibold'>Telephone</h5>
              <p className='text[16px]'>+62 812 3456789</p>
            </div>
            <div>
              <h5 className='text-[14px] font-semibold'>WhatsApp</h5>
              <p className='text[16px]'>+62 812 3456789</p>
            </div>
            <div>
              <h5 className='text-[14px] font-semibold'>Email</h5>
              <p className='text[16px]'>cs@laznaz.id</p>
            </div>
          </div>
          <div className='flex flex-col text-white gap-5'>
            <h5 className='text-[14px] font-semibold'>Social Media</h5>
            <div className='flex flex-row gap-5'>
              <a href='#'>
                <img
                  src={require('../../assets/linkedin.png')}
                  alt='instagram'
                />
              </a>
              <a href='#'>
                <img
                  src={require('../../assets/facebook.png')}
                  alt='instagram'
                />
              </a>
              <a href='#'>
                <img
                  src={require('../../assets/instagram.png')}
                  alt='instagram'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
