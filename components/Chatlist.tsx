import Image from 'next/image'

function Chatlist({setShowBody}: {setShowBody:any}) {
  return (
    <div>
      <div className="flex flex-row p-3 border-b items-center" onClick={() => setShowBody(true)}>
        <Image 
          alt="Avatar"
          src={require('../public/bolt.png')}
          width={60}
          height={60}
          className='rounded-full mr-2 object-fill'
        />

        <div className='w-full'>
          <div className="flex flex-row items-center justify-between w-full">
            <p>John Bolt</p>
            <p className="text-xs text-gray-500">Jan 18</p>
          </div>

          <p className="text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fuga sapiente magnam.</p>
          
        </div>
      </div>

      <div className="flex flex-row p-3 border-b items-center">
        <Image 
          alt="Avatar"
          src={require('../public/bolt.png')}
          width={60}
          height={60}
          className='rounded-full mr-2 object-fill'
        />

        <div>
          <div className="flex flex-row items-center justify-between w-full">
            <p>Kenneth Rockson</p>
            <p className="text-xs text-gray-500">Dec 1</p>
          </div>

          <p className="text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fuga sapiente magnam.</p>
          
        </div>
      </div>

      <div className="flex flex-row p-3 border-b items-center">
        <Image 
          alt="Avatar"
          src={require('../public/bolt.png')}
          width={60}
          height={60}
          className='rounded-full mr-2 object-fill'
        />

        <div>
          <div className="flex flex-row items-center justify-between w-full">
            <p>Jonathan Mensah</p>
            <p className="text-xs text-gray-500">Feb 3</p>
          </div>

          <p className="text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fuga sapiente magnam.</p>
          
        </div>
      </div>

      <div className="flex flex-row p-3 border-b items-center">
        <Image 
          alt="Avatar"
          src={require('../public/bolt.png')}
          width={60}
          height={60}
          className='rounded-full mr-2 object-fill'
        />

        <div>
          <div className="flex flex-row items-center justify-between w-full">
            <p>Gideon Mensah</p>
            <p className="text-xs text-gray-500">Dec 18</p>
          </div>

          <p className="text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fuga sapiente magnam.</p>
          
        </div>
      </div>

      <div className="flex flex-row p-3 border-b items-center">
        <Image 
          alt="Avatar"
          src={require('../public/bolt.png')}
          width={60}
          height={60}
          className='rounded-full mr-2 object-fill'
        />

        <div>
          <div className="flex flex-row items-center justify-between w-full">
            <p>Gideon Mensah</p>
            <p className="text-xs text-gray-500">Dec 18</p>
          </div>

          <p className="text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fuga sapiente magnam.</p>
          
        </div>
      </div>

      <div className="flex flex-row p-3 border-b items-center">
        <Image 
          alt="Avatar"
          src={require('../public/bolt.png')}
          width={60}
          height={60}
          className='rounded-full mr-2 object-fill'
        />

        <div>
          <div className="flex flex-row items-center justify-between w-full">
            <p>Gideon Mensah</p>
            <p className="text-xs text-gray-500">Dec 18</p>
          </div>

          <p className="text-sm font-normal text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fuga sapiente magnam.</p>
          
        </div>
      </div>
    </div>
  )
}

export default Chatlist