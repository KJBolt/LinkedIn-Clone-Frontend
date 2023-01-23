import Image from "next/image";
import {AiFillHome} from 'react-icons/ai';
import {HiUsers} from 'react-icons/hi';
import {BsBriefcaseFill} from 'react-icons/bs';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {BsFillBellFill} from 'react-icons/bs';
import {IoMdArrowDropdown} from 'react-icons/io';
import {BsThreeDots} from 'react-icons/bs';
import {GoSearch} from 'react-icons/go';
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

function Navbar() {
    const [openModal, setOpenModal] = useState(false);
    const [showIcons, setShowIcons] = useState(false);
    const router = useRouter();
    const path = router.pathname

  return (
    <header className="shadow-gray-300 shadow-sm z-10 sticky top-0 bg-white">
        <div className="container px-2 sm:px-6 md:px-6 lg:px-36 flex flex-row justify-between items-center">
            <div className="left flex flex-row">
                <Link href='/'>
                    <Image 
                        alt="Job Hunt"
                        src={require('../public/logo.jpg')}
                        height={40}
                        width={40}
                        className='mr-1 object-cover'
                    />
                </Link>

                <div className="relative text-gray-600 focus-within:text-gray-400 pt-2 hidden sm:hidden md:block">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4 mt-2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </span>
                    <input type="search" name="q" className=" bg-gray-200 py-2 text-sm  rounded-md pl-10 focus:outline-none w-72" placeholder="Search..." autoComplete="off" />
                </div>

                <div className="flex md:hidden items-center px-2 lg:px-4 ">
                    <GoSearch className="text-gray-500 text-xl"/>
                </div>
            </div>
            <div className="right flex flex-row">
                <Link href='/home'>
                    <div className={`flex flex-col items-center px-4 py-2 ${path === '/home' ? 'border-b-2' : ''} border-black`}>
                        <AiFillHome className={`${path === '/home' ? 'text-black-600 font-bold' : 'text-gray-500'} text-2xl`}/>
                        <p className={`text-xs ${path === '/home' ? 'text-black-600 font-bold' : ''}`}>Home</p>
                    </div>
                </Link>

                <Link href='/mynetwork'>
                    <div className={`flex flex-col items-center px-4 py-2 ${path === '/mynetwork' ? 'border-b-2' : ''} border-black`}>
                        <HiUsers className={`${path === '/mynetwork' ? 'text-black-600 font-bold' : 'text-gray-500'} text-2xl`}/>
                        <p className={`text-xs ${path === '/mynetwork' ? 'text-black-600 font-bold' : ''}`}>Network</p>
                    </div>
                </Link>

                <Link href='/jobs'>
                    <div className={`hidden sm:flex flex-col items-center px-4 py-2 ${path === '/jobs' ? 'border-b-2' : ''} border-black`}>
                        <BsBriefcaseFill className={`${path === '/jobs' ? 'text-black-600 font-bold' : 'text-gray-500'} text-2xl`}/>
                        <p className={`text-xs ${path === '/jobs' ? 'text-black-600 font-bold' : ''}`}>Jobs</p>
                    </div>
                </Link>

                <Link href='/messaging'>
                    <div className={`hidden sm:flex flex-col items-center px-4 py-2 ${path === '/messaging' ? 'border-b-2' : ''} border-black`}>
                        <BsFillChatDotsFill className={`${path === '/messaging' ? 'text-black-600 font-bold' : 'text-gray-500'} text-2xl`}/>
                        <p className={`text-xs ${path === '/messaging' ? 'text-black-600 font-bold' : ''}`}>Messaging</p>
                    </div>
                </Link>

                <Link href='/notifications'>
                    <div className={`hidden sm:flex flex-col items-center px-4 py-2 md:flex ${path === '/notifications' ? 'border-b-2' : ''} border-black`}>
                        <BsFillBellFill className={`${path === '/notifications' ? 'text-black-600 font-bold' : 'text-gray-500'} text-2xl`}/>
                        <p className={`text-xs ${path === '/notifications' ? 'text-black-600 font-bold' : ''}`}>Notifications</p>
                    </div>
                </Link>

                <div onClick={() => setOpenModal(!openModal)} className="hidden flex-col items-center sm:flex px-2 py-2 lg:px-4 ">
                    <Image 
                        alt="Avatar"
                        src={require('../public/bolt.png')}
                        width={30}
                        height={30}
                        className='rounded-full'
                    />
                    <div className="flex flex-row items-center">
                        <p className="text-xs">Me</p>
                        <IoMdArrowDropdown />
                    </div>
                </div>

                <div className="flex sm:hidden items-center px-2 lg:px-4" onClick={() => setShowIcons(!showIcons)}>
                    <BsThreeDots className="text-gray-500 text-2xl"/>
                </div>
                
            </div>
        </div>

        {openModal && <div className={`bg-white z-10 w-[300px] h-auto rounded-lg shadow-sm block shadow-gray-500 absolute right-0 sm:right-10 md:right-20 ${showIcons ? 'top-[120px] sm:top-[63px]' : 'top[0px]'}`}>
           <div className="border-b p-3">
                <div className="flex flex-row items-center p-2">
                    <Image 
                        alt="Avatar"
                        src={require('../public/bolt.png')}
                        width={60}
                        height={60}
                        className='rounded-full mr-3'
                    />

                    <div>
                        <p className="text-md font-medium">Kenneth Rockson</p>
                        <p className="text-sm font-normal">Software Developer</p>
                    </div>
                </div>

                <div>
                    <p className="border border-[#0a66c2] hover:border-2 cursor-pointer w-full py-[2px] rounded-xl text-sm text-[#0a66c2] font-semibold text-center">View Profile</p>
                </div>
           </div>

           <div className="p-3 border-b">
                <p className="text-md font-semibold  mb-2">Account</p>
                <div className="flex flex-row items-center mb-2">
                    <Image 
                        alt="Avatar"
                        src={require('../public/briefcase.jpg')}
                        width={20}
                        height={20}
                        className='rounded-full mr-3'
                    />
                    <p className="text-sm font-normal text-gray-500">Try Premium for free</p>
                </div>
                <p className="text-gray-500 text-sm font-normal mb-2 hover:underline cursor-pointer">Settings and Privacy</p>
                <p className="text-gray-500 text-sm font-normal mb-2 hover:underline cursor-pointer">Help</p>
                <p className="text-gray-500 text-sm font-normal mb-2 hover:underline cursor-pointer">Language</p>
           </div>

           <div className="p-3 border-b">
                <p className="text-md font-semibold  mb-2">Manage</p>
                <p className="text-gray-500 text-sm font-normal mb-2 hover:underline cursor-pointer">Post & Activity</p>
                <p className="text-gray-500 text-sm font-normal mb-2 hover:underline cursor-pointer">Job Posting Account</p>
           </div>

           <div className="border-b p-3">
            <p className="text-gray-500 text-sm font-normal hover:underline cursor-pointer">Signout</p>
           </div>
        </div>}

        {showIcons && <div className="bg-white z-10 w-auto h-auto rounded-lg shadow-sm block sm:hidden  shadow-gray-500">
            <div className="flex flex-row justify-end">
                <Link href='/jobs'>
                    <div className={`flex flex-col items-center px-4 py-2 ${path === '/jobs' ? 'border-b-2' : ''} border-black`}>
                        <BsBriefcaseFill className={`${path === '/jobs' ? 'text-black-600 font-bold' : 'text-gray-500'} text-2xl`}/>
                        <p className={`text-xs ${path === '/jobs' ? 'text-black-600 font-bold' : ''}`}>Jobs</p>
                    </div>
                </Link>

                <Link href='/messaging'>
                    <div className={`flex flex-col items-center px-4 py-2 ${path === '/messaging' ? 'border-b-2' : ''} border-black`}>
                        <BsFillChatDotsFill className={`${path === '/messaging' ? 'text-black-600 font-bold' : 'text-gray-500'} text-2xl`}/>
                        <p className={`text-xs ${path === '/messaging' ? 'text-black-600 font-bold' : ''}`}>Messaging</p>
                    </div>
                </Link>

                <Link href='/notifications'>
                    <div className={`flex flex-col items-center px-4 py-2 md:flex ${path === '/notifications' ? 'border-b-2' : ''} border-black`}>
                        <BsFillBellFill className={`${path === '/notifications' ? 'text-black-600 font-bold' : 'text-gray-500'} text-2xl`}/>
                        <p className={`text-xs ${path === '/notifications' ? 'text-black-600 font-bold' : ''}`}>Notifications</p>
                    </div>
                </Link>

                <div onClick={() => setOpenModal(!openModal)} className="flex sm:hidden  flex-col items-center px-2 py-2 lg:px-4 ">
                    <Image 
                        alt="Avatar"
                        src={require('../public/bolt.png')}
                        width={30}
                        height={30}
                        className='rounded-full'
                    />
                    <div className="flex flex-row items-center">
                        <p className="text-xs">Me</p>
                        <IoMdArrowDropdown />
                    </div>
                </div>
            </div>
        </div>}
    </header>
  )
}

export default Navbar