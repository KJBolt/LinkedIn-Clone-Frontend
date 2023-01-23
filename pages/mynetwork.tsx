import {} from 'react'
import Navbar from '../components/Navbar'
import {HiUsers} from 'react-icons/hi'
import {TiContacts} from 'react-icons/ti'
import {FaUser} from 'react-icons/fa'
import {MdGroups} from 'react-icons/md'
import {MdEventAvailable} from 'react-icons/md'
import {RiPagesLine} from 'react-icons/ri'
import {FaRegNewspaper} from 'react-icons/fa'
import {HiOutlineHashtag} from 'react-icons/hi'
import Image from "next/image";
import { connections } from '../Data'

function mynetwork() {
    
  return (
    <div>
        <Navbar />

        <main className='container my-7 px-2 sm:px-6 md:px-6 lg:px-36'>
            <div className='grid grid-cols-1 md:grid-cols-3 my-3 gap-8'>
                {/* Left Sidebar */}
                <div className='col-span-1 sm:col-span-1'>
                    <div className='border bg-white rounded-lg shadow-sm shadow-gray-300 sticky top-[90px]'>
                        <p className='p-3'>Manage my network</p>

                        <div className='flex flex-wrap justify-between items-center px-5'>
                            <div className='flex flex-wrap items-center '>
                                <HiUsers className='mr-2 text-xl text-gray-500'/>
                                <p className='text-gray-500'>Connections</p>
                            </div>
                            <div>
                                <p className='text-gray-500'>33</p>
                            </div>
                        </div>

                        <div className='flex flex-wrap justify-between items-center px-5'>
                            <div className='flex flex-wrap items-center my-3'>
                                <TiContacts className='mr-2 text-xl text-gray-500'/>
                                <p className='text-gray-500'>Contacts</p>
                            </div>
                            <div>
                                <p className='text-gray-500'>315</p>
                            </div>
                        </div>

                        <div className='px-5 mb-4'>
                            <div className='flex flex-wrap items-center'>
                                <FaUser className='mr-2 text-xl text-gray-500'/>
                                <p className='text-gray-500'>Following & followers</p>
                            </div>
                        </div>

                        <div className='px-5  mb-4'>
                            <div className='flex flex-wrap items-center'>
                                <MdGroups className='mr-2 text-2xl text-gray-500'/>
                                <p className='text-gray-500'>Groups</p>
                            </div>
                        </div>

                        <div className='px-5  mb-4'>
                            <div className='flex flex-wrap items-center'>
                                <MdEventAvailable className='mr-2 text-2xl text-gray-500'/>
                                <p className='text-gray-500'>Events</p>
                            </div>
                        </div>

                        <div className='px-5  mb-4'>
                            <div className='flex flex-wrap items-center'>
                                <RiPagesLine className='mr-2 text-2xl text-gray-500'/>
                                <p className='text-gray-500'>Pages</p>
                            </div>
                        </div>

                        <div className='px-5  mb-4'>
                            <div className='flex flex-wrap items-center'>
                                <FaRegNewspaper className='mr-2 text-2xl text-gray-500'/>
                                <p className='text-gray-500'>Newsletter</p>
                            </div>
                        </div>

                        <div className='px-5  mb-4'>
                            <div className='flex flex-wrap items-center'>
                                <HiOutlineHashtag className='mr-2 text-2xl text-gray-500'/>
                                <p className='text-gray-500'>Hashtags</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Right Sidebar */}
                <div className='col-span-1 sm:col-span-1 md:col-span-2'>
                    <div className='flex flex-row justify-between p-3 border bg-white rounded-lg shadow-gray-500 mb-3'>
                        <p className='text-gray-500'>No pending invitation</p>
                        <p className='text-gray-500'>Manage</p>
                    </div>

                    <div className='border bg-white p-5'>
                        <div className='flex flex-row justify-between items-center px-3'>
                            <p className='py-3'>People you may know</p>
                            <p>See all</p>
                        </div>
                        

                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                            {connections.map(connection => (
                                <div className='border flex flex-col justify-center items-center' key={connection.id}>
                                    <Image 
                                        src={connection.img}
                                        alt='Profile Pic'
                                        width={70}
                                        height={70}
                                        className='rounded-full mt-3'
                                    />
                                    <p className='font-semibold'>{connection.name}</p>
                                    <p className='text-gray-500 text-sm'>{connection.profession}</p>
                                    <p className='text-gray-500 text-sm mt-4'>Methodist University</p>
                                    <p className='border border-blue-600 hover:border-2 hover:bg-blue-100 text-blue-600 font-semibold px-8 py-1 my-2 rounded-xl  w-fit cursor-pointer'>Connect</p>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default mynetwork