import React from 'react'

const Stats = () => {
const globalStats = [
{
icon: './Assets/members.png',
title: 'Members',
number: 170,
},{
icon: './Assets/events.png',
title: 'Events',
number: 10,
},{
icon: './Assets/participants.png',
title: 'Participants',
number: 1200,
}
]
return (
<div className='min-w-[300px] h-fit p-8 rounded-lg border bg-white border-mainGrey w-full lg:w-auto'>
    <div className='flex justify-start relative'>
        <h3 className='text-1xl text-start font-semibold space-x-2'>Stats</h3>
        <div className='h-[4px] w-[4px] rounded-full bg-blue-500 absolute bottom-2 left-[40px]'></div>
    </div>
    <div className='flex flex-col gap-10 mt-5'>
        {globalStats.map((element, index) => (
        <div className='w-full flex flex-col gap-2' key={index}>
            <div className='flex w-full justify-between items-center gap-3'>
                <img src={require('./Assets/participants.png')} alt="#" />
                <p>{element.title}</p>
                <p>{element.number}</p>
                <img src={require('./Assets/nxt-icon.png')} className='flex self-end cursor-pointer' alt="#" />
            </div>
            <hr />
        </div>
        ))}
    </div>
    <button className='bg-[#f2fbfe] text-mainBlue w-full mt-5 rounded-md py-2'>View More</button>
</div>
)
}

export default Stats