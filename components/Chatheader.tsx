import {BsCircle} from 'react-icons/bs'
import {BsThreeDots} from 'react-icons/bs'
import {RiVideoAddFill} from 'react-icons/ri'

function Chatheader() {
  return (
    <div className='flex flex-row items-center justify-between px-3 border-b py-2'>
        <div className="left">
            <p className="text-sm font-medium">Kenneth Rockson</p>

            <div className='flex flex-row items-center'>
                <BsCircle className='text-xs mr-2 text-green-600 font-extrabold' />
                <p className='text-xs text-gray-500'>Available on mobile</p>
            </div>
            
        </div>
        <div className="right flex flex-row">
            <BsThreeDots className='ml-2 text-xl text-gray-500'/>
            <RiVideoAddFill className='ml-2 text-xl text-gray-500'/>
        </div>
    </div>
  )
}

export default Chatheader