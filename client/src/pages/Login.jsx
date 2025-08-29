import React from 'react'
import { assets } from '../assets/assets'
import { Star } from 'lucide-react'
import BlurBackground from './BlurBackground' // adjust path if needed
import {SignIn} from '@clerk/clerk-react'



const Login = () => {
  return (
    <div className='relative min-h-screen flex flex-col md:flex-row'>
      {/* Animated Blur Background */}
      <BlurBackground />
      {/* Example content */}
      <div className='flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40'>
        <img src={assets.monkeygram} alt="" className='h-15 object-contain' />
        <div>
          <div className='flex items-center gap-3 mb-4 max-md:mt-10'>
            <img src={assets.group_users} alt="" className='h-8 md:h-10' />
            <div>
              <div className='flex'>
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className='size-4 md:size-4.5 text-transparent fill-amber-500' />
                ))}
              </div>
              <p>Used by 12k+ developers</p>
            </div>
          </div>
          <h1 className='text-3xl md:text-4xl font-bold mb-4'>BLAH Blah BLAh BLah BLAh ...</h1>
          <p className='mb-4'>Connect with your friends and the world around you on MonkeyGram.</p>
        </div>
        <span className='md:h-auto'></span>
        <p className='text-sm'>&copy; 2024 MonkeyGram. All rights reserved.</p>
      </div>
      <div className='flex-1 flex item-center justify-center p-6 sm:p-10'>
          <SignIn />
      </div>
    </div>
  )
}

export default Login