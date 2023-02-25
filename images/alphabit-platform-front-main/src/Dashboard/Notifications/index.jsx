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
            <h1 className='font-bold text-xl '>Latest Notifications</h1>
            <div className='inline-flex'>
                <h2 className='text-View font-normal text-[95%] mr-1.5'>View All </h2>
                <div className='border-[1px] border-solid mb-2 mt-1 rounded border-mainBlue cursor-pointer'>
                    <MdOutlineKeyboardArrowRight color='#00ACE8' />
                </div>
            </div>
        </div>

        <div className='flex flex-row py-2 px-4 justify-between items-center w-full notification'>
            <div className='flex flex-row items-center'>
                <span className='w-2 h-2 bg-blue-400 rounded-full inline-block mr-[5%]'></span>
                <h2 className="w-full font-bold pr-4">Nazim <span className='italic text-mainGrey'>(President)</span> added new resources file</h2>
            </div>
            <div className='flex flex-row items-center gap-4'>
                <p className='text-mainGrey'>07:00 AM</p>
                <div className='border-[1px] border-solid h-fit mb-2 mt-1 rounded border-mainBlue cursor-pointer'>
                    <MdOutlineKeyboardArrowRight color='#00ACE8' />
                </div>
            </div>
        </div>

        <div className='flex flex-row py-2 px-4 justify-between items-center notification w-full '>
            <div className='flex flex-row items-center'>
                <span className='w-2 h-2 bg-blue-400 rounded-full inline-block mr-[5%]'></span>
                <h2 className="w-full font-bold pr-4"><span>[Reminder]</span> Meeting of the alpha.ai event today</h2>
            </div>
            <div className='flex flex-row items-center gap-4'>
                <p className='text-mainGrey'>Yesterday, 04:00 PM</p>
                <div className='border-[1px] border-solid h-fit mb-2 mt-1 rounded border-mainBlue cursor-pointer'>
                    <MdOutlineKeyboardArrowRight color='#00ACE8' />
                </div>
            </div>
        </div>

        <div className='flex flex-row py-2 px-4 justify-between items-center w-full notification'>
            <div className='flex flex-row items-center'>
                <h2 className="w-full pr-4">Dossier de sponsoring for project guide</h2>
            </div>
            <div className='flex flex-row items-center gap-4'>
                <p className='text-mainGrey'>December 1st 2022</p>
                <div className='border-[1px] border-solid h-fit mb-2 mt-1 rounded border-mainBlue cursor-pointer'>
                    <MdOutlineKeyboardArrowRight color='#00ACE8' />
                </div>
            </div>
        </div>

        <div className='flex flex-row py-2 px-4 justify-between items-center notification w-full'>
            <div className='flex flex-row items-center'>
                <h2 className="w-full pr-4">Bnadem got +star</h2>
            </div>
            <div className='flex flex-row items-center gap-4'>
                <p className='text-mainGrey'>December 1st 2022</p>
                <div className='border-[1px] border-solid h-fit mb-2 mt-1 rounded border-mainBlue cursor-pointer'>
                    <MdOutlineKeyboardArrowRight color='#00ACE8' />
                </div>
            </div>
        </div>

        <div className='flex flex-row py-2 px-4 justify-between items-center w-full notification'>
            <div className='flex flex-row items-center'>
            <h2 className="w-full text-bold pr-4"><span>[Reminder]</span> Report of communication Department meeting</h2>
            </div>
            <div className='flex flex-row items-center gap-4'>
                <p className='text-mainGrey'>December 1st 2022</p>
                <div className='border-[1px] border-solid h-fit mb-2 mt-1 rounded border-mainBlue cursor-pointer'>
                    <MdOutlineKeyboardArrowRight color='#00ACE8' />
                </div>
            </div>
        </div>
        
    </div>
</div> 
)
}

export default MemberProgress