import React from 'react'
import Image from 'next/image'

export default function DemoClass() {
  return (
    <div className='flex justify-center flex-col items-center'>
        <div className='text-center'>
            <h1 className='text-4xl lg:text-5xl text-[#4F4D74]'>What are you looking for!</h1>
        </div>
        <div className='flex flex-row items-center justify-between bg-[#EDD93C] max-w-[85vw] sm:max-w-[90vw] sm:min-w-[90vw] lg:min-w-[65vw] lg:max-w-[65vw] px-4 py-4 sm:px-12 sm:py-8 mt-6 rounded-3xl '> 
            <div className='w-[16rem]'>
                <Image
                src="/assets/images/say-hello.svg"
                width={500}
                height={500}
                alt="Picture of the author"></Image>
            </div>
            <button className='w-[15rem]'>
            <Image
                src="/assets/images/book-free-demo-class.svg"
                width={500}
                height={500}
                alt="Picture of the author"></Image>
            </button>
        </div>
    </div>
  )
}
