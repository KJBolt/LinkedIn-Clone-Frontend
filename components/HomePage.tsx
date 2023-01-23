import Image from "next/image";
import {BsFillBookmarkFill} from 'react-icons/bs';
import {BsInfoSquareFill} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';
import {BsArrowRight} from 'react-icons/bs';
import AddPost from "./AddPost";
import BodyContent from "./BodyContent";

function HomePage() {

  return (
    <div className="container my-7 px-2 sm:px-6 md:px-6 lg:px-36">
      <div className="grid gap-2 sm:gap-3 grid-cols-1  md:grid-cols-3 lg:grid-cols-4">
        <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
          <div className="border bg-white rounded-lg shadow-sm shadow-gray-300 sticky top-[70px]">
            {/* First Item */}
            <div className="border-b py-6 h-auto">
              <Image 
                src={require('../public/bolt.png')}
                alt='Profile Pic'
                width={50}
                height={50}
                className='rounded-full mx-auto'
              />

              <p className="mx-auto w-fit font-medium">Kenneth Rockson</p>
              <p className="mx-auto w-fit text-center text-sm text-zinc-500 font-light mb-2 px-3">Front End Developer | Full Stack Developer [ JavaScript | MERN Stack | React ]</p>
            </div>

            {/* Second Item */}
            <div className="py-2 border-b">
              <div className="flex flex-row justify-between items-center p-2">
                <div>
                  <p className="text-sm text-zinc-500">Connections</p>
                  <p className="text-sm text-zinc-600 font-semibold ">Grow your network</p>
                </div>

                <div>
                  <p className="text-sky-500 font-medium text-sm">24</p>
                </div>

              </div>

              <div className="flex flex-row justify-between items-center p-2">
                <div>
                  <p className="text-sm text-zinc-500">Who's viewed your profile</p>
                </div>

                <div>
                  <p className="text-sky-500 font-medium text-sm">14</p>
                </div>

              </div>
            </div>

            {/* Third Item */}
            <div className="flex flex-row items-center p-2">
              <BsFillBookmarkFill className="text-gray-500 mr-2" />
              <p className="text-sm text-zinc-600 font-semibold">My Items</p>
            </div>
          </div>
        </div>
        <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
          <AddPost />
          <BodyContent />
        </div>
        <div className="hidden lg:block lg:col-span-1">
          <div className="border bg-white rounded-lg shadow-sm shadow-gray-300 sticky top-[70px]">
            <div className="flex flex-row justify-between items-center p-2">
              <p className="font-bold text-gray-500">Add to your feed</p>
              <BsInfoSquareFill />
            </div>

            <div className="flex flex-row items-center my-4 mx-3">
              <Image 
                src={require('../public/bolt.png')}
                alt='Profile Pic'
                width={50}
                height={50}
                className='rounded-full mr-3'
              />
              <div className="flex flex-col items-start ">
                <p className="text-sm font-semibold text-gray-500">John Rockson</p>
                <p className="text-xs">Bishop</p>
                <div className="flex flex-row items-center border-2 border-gray-500 px-2 py-1 rounded-xl mt-1 cursor-pointer">
                  <AiOutlinePlus className='text-gray-500 font-bold'/>
                  <p className='text-gray-500 font-semibold text-sm'>Follow</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center my-4 mx-3">
              <Image 
                src={require('../public/bolt.png')}
                alt='Profile Pic'
                width={50}
                height={50}
                className='rounded-full mr-3'
              />
              <div className="flex flex-col items-start">
                <p className="text-sm font-semibold text-gray-500">Elisha Mohammed</p>
                <p className="text-xs">Psychologist</p>
                <div className="flex flex-row items-center border-2 border-gray-500 px-2 py-1 rounded-xl mt-1 cursor-pointer">
                  <AiOutlinePlus className='text-gray-500 font-bold'/>
                  <p className='text-gray-500 font-semibold text-sm'>Follow</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center my-4 mx-3">
              <Image 
                src={require('../public/bolt.png')}
                alt='Profile Pic'
                width={50}
                height={50}
                className='rounded-full mr-3'
              />
              <div className="flex flex-col items-start mb-3">
                <p className="text-sm font-semibold">John Bolt</p>
                <p className="text-xs text-gray-500">Meterolorogist</p>
                <div className="flex flex-row items-center border-2 border-gray-500 px-2 py-1 rounded-xl mt-1 cursor-pointer">
                  <AiOutlinePlus className='text-gray-500 font-bold'/>
                  <p className='text-gray-500 font-semibold text-sm'>Follow</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center mx-3 p-1 hover:bg-gray-200 w-fit cursor-pointer">
              <p className="text-gray-500 mr-2 w-fit">View all recommendations</p>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage