import React from 'react';
import './index.css';

export default function Hero() {
  return (
    <>
      <div className='flex justify-center items-center flex-col lg:flex-row lg:justify-between gap-5 mb-10 lg:mb-0'>
        <div className='flex order-2 lg:order-1 lg:ml-28'>
          <div className='flex flex-col gap-8'>
            <p className='text-[25px] sm:text-[48px]'>
              Yuk! Bayar Zakat Anda <br />
              di <b className='text-[#6AA915]'>QAI</b> sekarang
            </p>
            <div>
              <a
                href='#'
                className='bg-[#84CB25] px-[24px] py-[8px] rounded-md text-white zakat'>
                Bayar Zakat
              </a>
            </div>
          </div>
        </div>
        <div className='flex order-1 lg:order-2'>
          <img src={require('../../assets/hero.png')} alt='hero' />
        </div>
      </div>
    </>
  );
}
