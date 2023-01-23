import Navbar from "../components/Navbar"
import {BsFillBookmarkFill} from 'react-icons/bs'
import {FaBell} from 'react-icons/fa'
import {IoMdCheckmark} from 'react-icons/io'
import {IoIosPaper} from 'react-icons/io'
import {RiFilePaperLine} from 'react-icons/ri'
import {RiVideoFill} from 'react-icons/ri'
import {IoMdSettings} from 'react-icons/io'
import {FiEdit} from 'react-icons/fi'
import {BsBookmark} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import Image from "next/image"


function jobs() {
  return (
    <div>
       <Navbar />

       <main className="container my-7 px-2 sm:px-6 md:px-6 lg:px-36">
          {/* Left Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="col-span-1 md:col-span-1">
              <div className="border bg-white rounded-lg sticky top-[90px]">
                <div className="flex flex-row items-center mx-3 my-6 cursor-pointer">
                  <BsFillBookmarkFill className="text-gray-500 mr-3 font-medium" />
                  <p className="text-gray-500 font-semibold">My jobs</p>
                </div>

                <div className="flex flex-row items-center mx-3 my-6 cursor-pointer">
                  <FaBell className="text-gray-500 mr-3 font-medium" />
                  <p className="text-gray-500 font-semibold">Job alerts</p>
                </div>

                <div className="flex flex-row items-center mx-3 my-6 cursor-pointer">
                  <IoMdCheckmark className="text-gray-500 mr-3 font-medium" />
                  <p className="text-gray-500 font-semibold">Demonstrate Skills</p>
                </div>

                <div className="flex flex-row items-center mx-3 my-6 cursor-pointer">
                  <IoIosPaper className="text-gray-500 mr-3 font-medium" />
                  <p className="text-gray-500 font-semibold">Interview prep</p>
                </div>

                <div className="flex flex-row items-center mx-3 my-6 cursor-pointer">
                  <RiFilePaperLine className="text-gray-500 mr-3 font-medium" />
                  <p className="text-gray-500 font-semibold">Resume Builder</p>
                </div>

                <div className="flex flex-row items-center mx-3 my-6 cursor-pointer">
                  <RiVideoFill className="text-gray-500 mr-3 font-medium" />
                  <p className="text-gray-500 font-semibold">Job seeker guidance</p>
                </div>

                <div className="flex flex-row items-center mx-3 my-6 cursor-pointer">
                  <IoMdSettings className="text-gray-500 mr-3 font-medium" />
                  <p className="text-gray-500 font-semibold">Application settings</p>
                </div>
              </div>
              <div className="border hover:border-2 hover:bg-blue-100 cursor-pointer border-blue-500 py-2 my-3 rounded-2xl hidden md:flex flex-row items-center justify-center relative top:[600px] md:sticky md:top-[470px]">
                <FiEdit className="text-blue-600 mr-2 text-xl font-extrabold"/>
                <p className="text-blue-600 font-semibold">Post a free job</p>
              </div>
            </div>

            {/* Middle Section */}
            <div className="col-span-1 md:col-span-2 px-2">
              <div className="border bg-white rounded-lg p-2 shadow-sm shadow-gray-300">
                <div className="flex flex-row justify-between items-center m-4">
                  <p className="text-lg font-semibold">Recent job searches</p>
                  <p className="text-sm font-normal text-gray-500">Clear</p>
                </div>

                
                  <div className="border-b mb-4">
                    <div className="flex flex-row items-center mx-4">
                      <p className="text-sm font-semibold mr-2">node+js</p>
                      <p className="text-xs text-green-600 font-medium">6 new</p>
                    </div>
                    <div className="flex flex-row items-center mx-4 mb-3">
                      <p className="text-xs text-gray-500 font-semibold mr-2">Alert On</p>
                      <p className="text-xs text-gray-500 font-medium">Ghana</p>
                    </div>
                  </div>

                  <div className="border-b mb-4">
                    <div className="flex flex-row items-center mx-4">
                      <p className="text-sm font-semibold mr-2">full stack engineer</p>
                      <p className="text-xs text-green-600 font-medium">5 new</p>
                    </div>
                    <div className="flex flex-row items-center mx-4 mb-3">
                      <p className="text-xs text-gray-500 font-semibold mr-2">Alert On</p>
                      <p className="text-xs text-gray-500 font-medium">Accra, Greater Accra Region, Ghana</p>
                    </div>
                  </div>

                  <div className="border-b mb-4">
                    <div className="flex flex-row items-center mx-4">
                      <p className="text-sm font-semibold mr-2">frontend developer</p>
                      <p className="text-xs text-green-600 font-medium">1 new</p>
                    </div>
                    <div className="flex flex-row items-center mx-4 mb-3">
                      <p className="text-xs text-gray-500 font-semibold mr-2">Alert On</p>
                      <p className="text-xs text-gray-500 font-medium">Ghana</p>
                    </div>
                  </div>
              </div>

              <div className="border bg-white shadow-sm shadow-gray-300 rounded-lg my-3 px-6 py-4">
                <div>
                  <p className="text-lg font-semibold">Recommended for you</p>
                  <p className="text-xs text-gray-500 font-normal">Based on your profile and search history</p>
                </div>

                <div className="mt-7 border-b flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center ">
                    <Image 
                      src={require('../public/bolt.png')}
                      alt='Profile Pic'
                      width={50}
                      height={50}
                      className='rounded-full mr-3'
                    />

                    <div>
                      <p className="text-md text-blue-600 font-semibold">Web Developer</p>
                      <p className="text-sm font-light">Bolt Studios</p>
                      <p className="text-xs font-light text-gray-500">Accra, Greater Accra Region, Ghana (Remote)</p>
                      <div className="flex flex-row items-center mt-1">
                        <Image 
                          src={require('../public/recruit.jpg')}
                          alt='Icon'
                          width={30}
                          height={30}
                        />
                        <p className="text-xs font-normal text-gray-500">Actively recruiting</p>
                      </div>
                      <p className="text-xs font-light text-gray-500 mb-3">1 month ago</p>
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <BsBookmark className="text-gray-500 text-xl font-extrabold"/>
                  </div>
                </div>

                <div className="mt-7 border-b flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center justify-center">
                    <Image 
                      src={require('../public/pastor2.jpg')}
                      alt='Profile Pic'
                      width={50}
                      height={50}
                      className='rounded-full mr-3'
                    />

                    <div>
                      <p className="text-md text-blue-600 font-semibold">Hr Manager</p>
                      <p className="text-sm font-light">Bolt Studios</p>
                      <p className="text-xs font-light text-gray-500">Accra, Greater Accra Region, Ghana (Remote)</p>
                      <div className="flex flex-row items-center mt-1">
                        <Image 
                          src={require('../public/recruit.jpg')}
                          alt='Icon'
                          width={30}
                          height={30}
                        />
                        <p className="text-xs font-normal text-gray-500">Actively recruiting</p>
                      </div>
                      <p className="text-xs font-light text-gray-500 mb-3">1 month ago</p>
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <BsBookmark className="text-gray-500 text-xl font-extrabold"/>
                  </div>
                </div>

                <div className="mt-7 border-b flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center ">
                    <Image 
                      src={require('../public/pastor1.jpg')}
                      alt='Profile Pic'
                      width={50}
                      height={50}
                      className='rounded-full mr-3'
                    />

                    <div>
                      <p className="text-md text-blue-600 font-semibold">Mobile App Developer</p>
                      <p className="text-sm font-light">Bolt Studios</p>
                      <p className="text-xs font-light text-gray-500">Accra, Greater Accra Region, Ghana (Remote)</p>
                      <div className="flex flex-row items-center mt-1">
                        <Image 
                          src={require('../public/recruit.jpg')}
                          alt='Icon'
                          width={30}
                          height={30}
                        />
                        <p className="text-xs font-normal text-gray-500">Actively recruiting</p>
                      </div>
                      <p className="text-xs font-light text-gray-500 mb-3">1 month ago</p>
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <BsBookmark className="text-gray-500 text-xl font-extrabold"/>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Section */}
            <div className="col-span-1 md:col-span-1 ">
              <div className="border bg-white rounded-lg shadow-sm shadow-gray-300 sticky top-[90px]">
                <div className="my-3 p-3">
                  <p className="font-semibold">Job seeker guidance</p>
                  <p className="text-xs font-light">Recommended based on your activity</p>
                </div>

                <div className="flex flex-row items-center justify-between bg-stone-50 cursor-pointer hover:bg-slate-100 my-2 p-3">
                  <p className="font-semibold">I want to improve my resume</p>
                  <Image 
                    src={require('../public/resume.jpg')}
                    alt='Resume'
                    height={50}
                    width={50}
                  />
                </div>

                <div className="p-3">
                  <p className="text-sm font-normal">Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.</p>
                  <div className="flex flex-row items-center">
                    <p className="mr-2 text-purple-400 font-normal">Show more</p>
                    <BsArrowRight className="font-normal text-purple-400" />
                  </div>
                </div>
                
              </div>
            </div>
          </div>
       </main>
    </div>
  )
}

export default jobs