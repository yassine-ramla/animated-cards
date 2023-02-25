import React from 'react'
import ProfileData from './ProfileData'
function ProfileDetails() {
return (
<div className='h-auto w-full flex flex-col border border-solid border-mainGrey bg-white rounded-lg' style={{
      width: '100%', height: '480px'
    }}>
  <div className='flex flex-row p-4 py-8 justify-start items-center border-bottom-solid' style={{
        height: '50px', width: '100%'
      }}>
    <div className='p-3'>
      <svg width="20" height="22" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.5 22.4857C26.8513 22.4857 32 17.5218 32 11.3986C32 5.27537 26.8513 0.311523 20.5 0.311523C14.1487 0.311523 9 5.27537 9 11.3986C9 17.5218 14.1487 22.4857 20.5 22.4857Z"
          fill="#3A7BD5" />
        <path d="M20.5 22.4857C9.17816 22.4857 0 31.5309 0 42.6888H41C41 31.5309 31.8218 22.4857 20.5 22.4857Z"
          fill="#3A7BD5" />
      </svg>
    </div>
    <span className='p-0 text-xl font-semibold tracking-wide ' style={{
          color: '#3A7BD5'
        }}>Profile details</span>
  </div>
  <div className='flex justify-center items-center border-t border-b border-mainGrey p-4' style={{
        height: '200px'
      }}>
    <div className=' bg-AlphaBlue rounded-full border-blue-400' style={{
          height: '90px', width: '90px'
        }}>
    </div>
  </div>
  <div className='py-4 profile-data flex flex-col gap-1'>
    {
    ProfileData.map(item =>
    <div className='mb-1' key={item.id}>
      <span className='text-black text-xs font-semibold px-10'>
        {
        item.info
        }
      </span>
      <div
        className='border rounded h-8 flex items-center border-solid border-stone-500 text-slate-900 text-semibold text-sm px-3'
        style={{
                backgroundColor: '#E6E8EF', width: '80%', margin: '10px auto'
              }}>
        {
        item.info
        }
      </div>
    </div>

    )

    }
  </div>
</div>

)
}

export default ProfileDetails