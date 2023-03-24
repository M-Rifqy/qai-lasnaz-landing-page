import React from 'react';

export default function Article() {
  return (
    <>
      <div className='bg-[#F6FFEB] flex flex-col justify-center items-center px-20 py-10'>
        <div className='mb-10'>
          <h1 className='text-[39px] font-semibold'>Artikel</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          <div className='flex flex-col gap-1.5'>
            <img src={require('../../assets/article.png')} alt='article' />
            <p className='text-[#6AA915] text-[14px]'>Berita</p>
            <h2 className='text-[18px] font-semibold'>Lorem Ipsum</h2>
            <p className='text-[14px]'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
            <div className='mt-3'>
              <a
                href='#'
                className='text-[12px] text-white bg-[#84CB25] rounded-md p-[7px]'>
                Baca Lebih Lengkap
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-1.5'>
            <img src={require('../../assets/article.png')} alt='article' />
            <p className='text-[#6AA915] text-[14px]'>Berita</p>
            <h2 className='text-[18px] font-semibold'>Lorem Ipsum</h2>
            <p className='text-[14px]'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
            <div className='mt-3'>
              <a
                href='#'
                className='text-[12px] text-white bg-[#84CB25] rounded-md p-[7px]'>
                Baca Lebih Lengkap
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-1.5'>
            <img src={require('../../assets/article.png')} alt='article' />
            <p className='text-[#6AA915] text-[14px]'>Berita</p>
            <h2 className='text-[18px] font-semibold'>Lorem Ipsum</h2>
            <p className='text-[14px]'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
            <div className='mt-3'>
              <a
                href='#'
                className='text-[12px] text-white bg-[#84CB25] rounded-md p-[7px]'>
                Baca Lebih Lengkap
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-1.5'>
            <img src={require('../../assets/article.png')} alt='article' />
            <p className='text-[#6AA915] text-[14px]'>Berita</p>
            <h2 className='text-[18px] font-semibold'>Lorem Ipsum</h2>
            <p className='text-[14px]'>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
            <div className='mt-3'>
              <a
                href='#'
                className='text-[12px] text-white bg-[#84CB25] rounded-md p-[7px]'>
                Baca Lebih Lengkap
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
