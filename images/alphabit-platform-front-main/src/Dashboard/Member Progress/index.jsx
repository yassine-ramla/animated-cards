import { AiOutlineInfoCircle } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
// MdOutlineKeyboardArrowRight
import React from 'react'
import './style.css'

const MemberProgress = () => {
return (
// background color + padding
<div className='contt w-full'>
  <div className='cont p-4 border-solid border-[1px] rounded-xl bg-white border-mainGrey lg:p-5'>
    <div className='cont1 flex justify-between mb-[3%] '>
      <h1 className='font-bold text-xl '>Members Progress</h1>
      <div className='inline-flex'>
        <h2 className='text-View font-normal text-[95%] mr-1.5'>View All </h2>
        <div className='border-[1px] border-solid mb-2 mt-1 rounded border-mainBlue cursor-pointer'>
          <MdOutlineKeyboardArrowRight color='#00ACE8' />
        </div>
      </div>
    </div>
    <div className='cont2 grid grid-cols-4 gap-[35%] '>
      <div className='text-[90%] text-mainGrey'>Fullname</div>
      <div className='text-[90%] text-mainGrey'>Department</div>
      <div className='text-[90%] text-mainGrey'>Stage</div>
    </div>
    <hr className='my-3 h-px bg-mainGrey border-0 dark:bg-mainGrey mb-[4%]' />
    <div className='cont3 flex flex-col gap-7'>
      <div className='flex flex-row'>
        <div className='text-[14px] pr-2  w-[35.15%] '>Badie Alili</div>
        <div className='text-[14px] pr-2 w-[38%]  '>Communication</div>
        <div className='text-[14px] pl-2 w-[27.3%] '><span className='w-2 h-2 bg-blue-400 rounded-full inline-block mr-[5%]'></span> Post Design </div>
        <div className=' mt-1 cursor-pointer'>
          <AiOutlineInfoCircle color='#BFBFBF' />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='text-[14px] pr-2  w-[35.15%] '>Abdelmoncef Selloum</div>
        <div className='text-[14px] pr-2 w-[38%] '>Finance</div>
        <div className='text-[14px] pl-2 w-[27.3%] '><span className='w-2 h-2 bg-blue-400 rounded-full inline-block mr-[5%]'></span> Sponsoring</div>
        <div className=' mt-1 cursor-pointer'>
          <AiOutlineInfoCircle color='#BFBFBF' />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='text-[14px] pr-2  w-[35.15%] '>Mahfoud Mahouf</div>
        <div className='text-[14px] pr-2 w-[38%] '>Dev</div>
        <div className='text-[14px] pl-2 w-[27.3%] '><span className='w-2 h-2 bg-blue-400 rounded-full inline-block mr-[5%]'></span> Email Template </div>
        <div className=' mt-1 cursor-pointer'>
          <AiOutlineInfoCircle color='#BFBFBF' />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='text-[14px] pr-2  w-[35.15%]  '>Badie Alili</div>
        <div className='text-[14px] pr-2 w-[38%] '>Communication</div>
        <div className='text-[14px] pl-2 w-[27.3%] '><span className='w-2 h-2 bg-red-400 rounded-full inline-block mr-[5%]'></span> Video Editing </div>
        <div className=' mt-1 cursor-pointer'>
          <AiOutlineInfoCircle color='#BFBFBF' />
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='text-[14px] pr-2  w-[35.15%] '>Okba Allaoua</div>
        <div className='text-[14px] pr-2 w-[38%] '>Dev</div>
        <div className='text-[14px] pl-2 w-[27.3%] '><span className='w-2 h-2 bg-blue-400 rounded-full inline-block mr-[5%]'></span> Website Front </div>
        <div className=' mt-1 cursor-pointer'>
          <AiOutlineInfoCircle color='#BFBFBF' />
        </div>
      </div>
    </div>
  </div>
</div> )
}

export default MemberProgress