import Image from "next/image";


function AddPost() {
  return (
    <div className="border bg-white rounded-lg shadow-sm shadow-gray-300">
        {/* Search Field */}
        <div className="flex flex-row p-2">
            <Image 
                src={require('../public/bolt.png')}
                alt='Profile Pic'
                width={50}
                height={50}
                className='rounded-full mr-2'
            /> 
            <input type="text" placeholder='Start a post' className="mt-1 block w-11/12 px-3 py-2 bg-white border border-slate-300 rounded-2xl text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-300 focus:ring-1 focus:ring-sky-300 invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
        </div>

        {/* Icons */}
        <div className="flex flex-row justify-around py-2">
            <div className="flex flex-col sm:flex-row items-center">
                <Image 
                    src={require('../public/image1.jpg')}
                    alt='Profile Pic'
                    width={40}
                    height={40}
                    className='rounded-full pr-1'
                />
                <p className="text-sm font-normal text-gray-500">Image</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center">
                <Image 
                    src={require('../public/video1.jpg')}
                    alt='Profile Pic'
                    width={40}
                    height={40}
                    className='rounded-full pr-1'
                />
                <p className="text-sm font-normal text-gray-500">Video</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center">
                <Image 
                    src={require('../public/event1.jpg')}
                    alt='Profile Pic'
                    width={40}
                    height={40}
                    className='rounded-full pr-1'
                />
                <p className="text-sm font-normal text-gray-500">Event</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center">
                <Image 
                    src={require('../public/write1.jpg')}
                    alt='Profile Pic'
                    width={40}
                    height={40}
                    className='rounded-full pr-1'
                />
                <p className="text-sm font-normal text-gray-500">Write Article</p>
            </div>
        </div>
    </div>
  )
}

export default AddPost