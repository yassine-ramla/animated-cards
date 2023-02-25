import React from 'react'
import logoimg from './logo192.png'

export default function Login() {
    return (
        <section className='container mx-auto h-screen w-full bg-gray-100'>
            <div className=' flex flex-col justify-center h-screen font-Raleway'>
                <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                    <img className='max-w-screen-lg mx-auto pb-5' src={logoimg} alt="" />
                    <h2 className='text-2xl font-bold text-center py-6'><span className='text-AlphaBlue'>AlphaBit</span> Platform</h2>
                    <div className='flex flex-col py-2'>
                        <label>Username</label>
                        <input className='border p-2' type="text" />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Password</label>
                        <input className='border p-2' type="password" />
                    </div>
                    <button onClick={(e)=>{
                        e.preventDefault()
                        window.location.pathname ='/Edit-Profile'
                    }} className='border w-full my-5 py-2 bg-AlphaBlue hover:bg-black text-white'>Sign In</button>
                    <div className='flex justify-between'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    </div>
                </form>
            </div>
        </section>

    )
}

