import React from 'react';
import './index.css';

export default function Statistic() {
  return (
    <div className='flex justify-center items-center my-10 mx-5'>
      <div className='flex flex-row gap-[1px]'>
        <div className='flex justify-center items-center p-2 sm:p-5 bg-gradient rounded-tl-md rounded-bl-md'>
          <div className='flex flex-col justify-center items-center text-center text-white font-semibold'>
            <h5 className='text-[16px] md:text-[20px] xl:text-[25px] mb-1'>
              Program Donasi
            </h5>
            <h2 className='text-[18px] md:text-[25px] xl:text-[30px]'>4</h2>
          </div>
        </div>

        <div className='flex justify-center items-center p-2 sm:p-5 bg-gradient'>
          <div className='flex flex-col justify-center items-center text-center text-white font-semibold'>
            <h5 className='text-[16px] md:text-[20px] xl:text-[25px] mb-1'>
              Total Dana Terkumpul
            </h5>
            <h2 className='text-[18px] md:text-[25px] xl:text-[30px]'>
              Rp.4000.000.000
            </h2>
          </div>
        </div>

        <div className='flex justify-center items-center p-2 sm:p-5 bg-gradient rounded-tr-md rounded-br-md'>
          <div className='flex flex-col justify-center items-center text-center text-white font-semibold'>
            <h5 className='text-[16px] md:text-[20px] xl:text-[25px] mb-1'>
              Donatur Terdaftar
            </h5>
            <h2 className='text-[18px] md:text-[25px] xl:text-[30px]'>40000</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
