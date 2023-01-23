import Image from 'next/image'
import {IoCheckmarkDoneSharp} from 'react-icons/io5'


function ChatBody() {
  return (
    <div className='px-3'>
      <div className='flex flex-col justify-start px-3'>
        <Image 
          alt="Avatar"
          src={require('../public/bolt.png')}
          width={80}
          height={80}
          className='rounded-full'
        />

        <p className='text-md font-medium'>John Bolt</p>
        <p className='text-sm font-normal'>Head of John Bolt Studios Ghana</p>
      </div>

      <div>
        <div className='flex flex-row items-center justify-center my-2'>
          <Image 
            alt="Avatar"
            src={require('../public/bolt.png')}
            width={40}
            height={20}
            className='rounded-full mr-2'
          />

          <div className='py-2 px-2'>
            <div className='flex flex-row items-center'>
              <p className='text-sm font-medium mr-2'>Kenneth Rockson</p>
              <p className='text-xs font-light text-gray-500'>3:20pm</p>
            </div>
            <div className='flex flex-row justify-between '>
              <p className='w-11/12 text-sm font-normal text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Veritatis, vel temporibus beatae eum tempora nisi placeat 
                voluptatibus odit illum perferendis?
              </p>

              <IoCheckmarkDoneSharp />

            </div>
            
          </div>
        </div>

        <div className='flex flex-row items-center justify-center my-2'>
          <Image 
            alt="Avatar"
            src={require('../public/bolt.png')}
            width={40}
            height={20}
            className='rounded-full mr-2'
          />

          <div className='py-2 px-2'>
            <div className='flex flex-row items-center'>
              <p className='text-sm font-medium mr-2'>John Bolt</p>
              <p className='text-xs font-light text-gray-500'>3:20pm</p>
            </div>
            <div className='flex flex-row justify-between '>
              <p className='w-11/12 text-sm font-normal text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Veritatis, vel temporibus beatae eum tempora nisi placeat 
                voluptatibus odit illum perferendis?
              </p>

              <IoCheckmarkDoneSharp />

            </div>
            
          </div>
        </div>

        <div className='flex flex-row items-center justify-center my-2'>
          <Image 
            alt="Avatar"
            src={require('../public/bolt.png')}
            width={40}
            height={20}
            className='rounded-full mr-2'
          />

          <div className='py-2 px-2'>
            <div className='flex flex-row items-center'>
              <p className='text-sm font-medium mr-2'>Kenneth Rockson</p>
              <p className='text-xs font-light text-gray-500'>3:20pm</p>
            </div>
            <div className='flex flex-row justify-between '>
              <p className='w-11/12 text-sm font-normal text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Veritatis, vel temporibus beatae eum tempora nisi placeat 
                voluptatibus odit illum perferendis?
              </p>

              <IoCheckmarkDoneSharp />

            </div>
            
          </div>
        </div>

        <div className='flex flex-row items-center justify-center my-2'>
          <Image 
            alt="Avatar"
            src={require('../public/bolt.png')}
            width={40}
            height={20}
            className='rounded-full mr-2'
          />

          <div className='py-2 px-2'>
            <div className='flex flex-row items-center'>
              <p className='text-sm font-medium mr-2'>Kenneth Rockson</p>
              <p className='text-xs font-light text-gray-500'>3:20pm</p>
            </div>
            <div className='flex flex-row justify-between '>
              <p className='w-11/12 text-sm font-normal text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Veritatis, vel temporibus beatae eum tempora nisi placeat 
                voluptatibus odit illum perferendis?
              </p>

              <IoCheckmarkDoneSharp />

            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatBody
