import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import {BsThreeDots} from 'react-icons/bs';

function notifications() {
  return (
    <div>
        <Navbar />

        <main className='container my-7 px-2 sm:px-6 md:px-6 lg:px-36'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='col-span-1 '>
                    <div className='flex border rounded-lg bg-white shadow-sm shadow-gray-300 md:block flex-row md:flex-col justify-between md:jutify-center items-center p-5 sticky top-[90px]'>
                        <p>Manage your notifications</p>
                        <p className='text-sm text-sky-600 font-medium'>View Settings</p>
                    </div>
                    
                </div>
                <div className='col-span-1 md:col-span-2 '>
                    <div className='border rounded-lg bg-white'>
                        <div>
                            <div className="left flex flex-row hover:bg-stone-100 cursor-pointer justify-between items-center p-3">
                                <div className='flex flex-row items-center'>
                                    <Image 
                                        alt="Job Hunt"
                                        src={require('../public/pastor1.jpg')}
                                        height={50}
                                        width={50}
                                        className='mr-2 object-fit rounded-full'
                                    />
                                    <p className='pr-0 md:pr-10 text-sm text-gray-500'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Architecto dicta ut delectus provident voluptate suscipit. 
                                        Facere similique quas suscipit vitae.
                                    </p>
                                </div>
                                <div>
                                    <p className='text-xs text-gray-500 mb-3'>5h</p>
                                    <BsThreeDots className='text-xl text-gray-500'/>
                                </div>
                                
                            </div>

                            <div className="left flex flex-row hover:bg-stone-100 cursor-pointer justify-between items-center p-3">
                                <div className='flex flex-row items-center'>
                                    <Image 
                                        alt="Job Hunt"
                                        src={require('../public/briefcase.jpg')}
                                        height={50}
                                        width={50}
                                        className='mr-2 object-cover rounded-full'
                                    />
                                    <div>
                                        <p className='pr-10 text-sm text-gray-500'>
                                            Your <strong className='font-semibold'>Job Alert</strong>  for <strong className='font-semibold'>web developer</strong> in <strong className='font-semibold'>Tema</strong> 
                                        </p>
                                        <p className='border border-sky-600 text-sky-600 w-fit px-3 mt-2 rounded-xl'>View 1 Job</p>
                                    </div>
                                    
                                </div>
                                <div>
                                    <p className='text-xs text-gray-500 mb-3'>3h</p>
                                    <BsThreeDots className='text-xl text-gray-500'/>
                                </div>
                                
                            </div>

                            <div className="left flex flex-row hover:bg-stone-100 cursor-pointer justify-between items-center p-3">
                                <div className='flex flex-row items-center'>
                                    <Image 
                                        alt="Job Hunt"
                                        src={require('../public/bolt.png')}
                                        height={50}
                                        width={50}
                                        className='mr-2 object-cover rounded-full'
                                    />
                                    <div>
                                        <p className='pr-10 text-sm text-gray-500'>
                                            Congratulate <strong className='font-semibold'>John Bolt</strong> on 4 years in <strong className='font-semibold'>web development</strong> 
                                        </p>
                                        <p className='border border-sky-600 text-sky-600 w-fit px-3 mt-2 rounded-xl'>View 1 Job</p>
                                    </div>
                                    
                                </div>
                                <div>
                                    <p className='text-xs text-gray-500 mb-3'>3h</p>
                                    <BsThreeDots className='text-xl text-gray-500'/>
                                </div>
                            </div>

                            <div className="left flex flex-row hover:bg-stone-100 cursor-pointer justify-between items-center p-3">
                                <div className='flex flex-row items-center'>
                                    <Image 
                                        alt="Job Hunt"
                                        src={require('../public/briefcase.jpg')}
                                        height={50}
                                        width={50}
                                        className='mr-2 object-cover rounded-full'
                                    />
                                    <div>
                                        <p className='pr-10 text-sm text-gray-500'>
                                            Your <strong className='font-semibold'>application was viewed</strong> by for Backend Developer at Bolt Studios 
                                        </p>
                                        <p className='border border-sky-600 text-sky-600 w-fit px-3 mt-2 rounded-xl'>View 1 Job</p>
                                    </div>
                                    
                                </div>
                                <div>
                                    <p className='text-xs text-gray-500 mb-3'>3h</p>
                                    <BsThreeDots className='text-xl text-gray-500'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default notifications