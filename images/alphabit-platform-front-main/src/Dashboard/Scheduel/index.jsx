import React from 'react'

const Sheduel = () => {
return (
<div className='lg:max-w-[300px] w-full h-fit bg-white border-mainGrey p-5 rounded-lg border'>
  <div className='flex justify-start relative'>
    <h3 className='text-1xl text-start font-semibold space-x-2'>Scheduel</h3>
    <div className='h-[4px] w-[4px] rounded-full bg-blue-500 absolute bottom-2 left-[70px]'></div>
  </div>
  <p className='text-sm my-2 text-start'>
    Today-8 December 2022
  </p>
  <div className='flex flex-col gap-y-4 mb-6'>
    <div className='flex items-center h-[70px] gap-x-3'>
      <div className='border-0 px-3 h-full  border-r-2 border-blue-500 flex items-center'>
        <h1 className='text-3xl'>10:00</h1>
      </div>
      <div className='p-2'>
        <h4 className='text-sm text-start font-semibold'>EB Meeting</h4>
        <p className='text-xs text-start text-slate-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit..
        </p>
      </div>
    </div>

    <div className='flex items-center h-[70px] gap-x-3'>
      <div className='border-0 px-3 h-full  border-r-2 border-red-600 flex items-center'>
        <h1 className='text-3xl'>01:00</h1>
      </div>
      <div className='p-2'>
        <h4 className='text-sm text-start font-semibold'>Alpha Ai Meeting</h4>
        <p className='text-xs text-start text-slate-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit..
        </p>
      </div>
    </div>
  </div>
  <hr />
  <p className='text-sm text-slate-500 text-start my-3'>
    13 Février 2022
  </p>
  <div className='flex items-center h-[70px] gap-x-3'>
    <div className='border-0 px-3 h-full border-r-2 border-blue-600 flex items-center'>
      <h1 className='text-3xl'>01:00</h1>
    </div>
    <div className='p-2'>
      <h4 className='text-sm text-start font-semibold'>EB Meeting</h4>
      <p className='text-xs text-start text-slate-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit..
      </p>
    </div>
  </div>
  <button className='bg-[#f2fbfe] text-mainBlue w-full mt-5 rounded-md py-2'>View More</button>
</div>
)
}

export default Sheduel