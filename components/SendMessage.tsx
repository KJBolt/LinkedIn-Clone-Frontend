import React from 'react'

function SendMessage() {
  return (
    <div>
        <div className='border-b border-t w-full px-5 py-2'>
        <textarea cols={30} rows={3} placeholder='Write a message...' className='border w-full p-2 outline-none bg-stone-100 rounded-md'></textarea>
        </div>

        <div className='flex flex-row justify-end mr-6'>
            <p className='bg-zinc-200 w-fit py-1 px-3 rounded-xl my-2 cursor-pointer'>Send</p>
        </div>
    </div>
  )
}

export default SendMessage
