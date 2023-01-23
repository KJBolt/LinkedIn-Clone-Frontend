import Image from 'next/image'
import {BsThreeDots} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineLike} from 'react-icons/ai';
import {FaRegCommentDots} from 'react-icons/fa';
import {RiSendPlaneFill} from 'react-icons/ri';
import {BiRepost} from 'react-icons/bi';
import { data } from '../Data';


function BodyContent() {
  return (
    <>
        {data.map(item => (
            <div className='border bg-white my-4 rounded-lg p-3 shadow-sm shadow-gray-300' key={item.id}>
                <div className='flex flex-row justify-between px-2 py-2 border-b'>
                    <p className='text-xs font-light'><strong className='font-semibold'>{item.name}</strong> like this</p>
                    <BsThreeDots className='text-lg text-gray-500'/>
                </div>

                <div className='flex flex-row items-center justify-between py-3 mt-2 px-2'>
                    <div className='flex flex-row items-center'>
                        <Image 
                            alt="Profile pic"
                            src={item.img}
                            height={50}
                            width={50}
                            className='mr-2 object-cover rounded-full'
                        />

                        <div>
                            <p className='text-sm font-medium'>{item.name}</p>
                            <p className='text-xs text-gray-500 font-normal'>{item.profession}</p>
                            <p className='text-xs text-gray-500 font-normal'>{item.time}</p>
                        </div>
                    </div>

                    <div className='flex flex-row items-center'>
                        <AiOutlinePlus className='text-blue-500 font-bold'/>
                        <p className='text-blue-500 font-semibold'>Follow</p>
                    </div>
                </div>

                <div>
                    <p className='text-sm mb-2'>{item.desc}</p>
                </div>

                <div className='w-auto relative'>
                    <Image 
                        alt="Profile pic"
                        src={require('../public/food.jpg')}
                        className='mr-2 object-cover'
                    /> 
                </div>

                <div>
                    <p className='py-2 text-gray-500 text-sm'>{item.likeUser} and 15 others</p>
                </div>

                <div className="flex flex-row justify-around py-2">
                    <div className="flex flex-col sm:flex-row items-center">
                        <AiOutlineLike className='text-2xl mr-1 text-gray-500' />
                        <p className="text-sm font-normal text-gray-500">Like</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center cursor-pointer">
                        <FaRegCommentDots className='text-2xl mr-1 text-gray-500'/>
                        <p className="text-sm font-normal text-gray-500">Comment</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center cursor-pointer">
                        <BiRepost className='text-2xl mr-1 text-gray-500'/>
                        <p className="text-sm font-normal text-gray-500">Repost</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center cursor-pointer">
                        <RiSendPlaneFill className='text-2xl mr-1 text-gray-500'/>
                        <p className="text-sm font-normal text-gray-500">Send</p>
                    </div>
                </div>
            </div>
        ))}
    </>
  )
}

export default BodyContent