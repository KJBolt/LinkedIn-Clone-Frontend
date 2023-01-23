import Navbar from "../components/Navbar"
import {BsThreeDots} from 'react-icons/bs'
import {FiEdit} from 'react-icons/fi'
import Chatlist from "../components/Chatlist"
import Chatheader from "../components/Chatheader"
import ChatBody from "../components/ChatBody"
import SendMessage from "../components/SendMessage"
import {useState} from 'react';



function messaging() {
  const [showBody, setShowBody] = useState(false);

  return (
    <div>
        <Navbar />

        <main className="container my-7 px-2 sm:px-6 md:px-6 lg:px-36">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className={`border shadow-sm rounded-l-lg bg-white col-span-1 ${!showBody ? 'block' : 'hidden'}  md:block`}>

                <div className="flex flex-row justify-between items-center px-3 py-3 border-b">
                  <p>Messaging</p>
                  <div className="flex flex-row items-center">
                    <BsThreeDots className="mr-3 text-xl text-gray-500" />
                    <FiEdit className="mr-3 text-xl text-gray-500"/>
                  </div>
                </div>

                <div className="flex flex-row justify-center items-center">
                  <div className="relative text-gray-600 focus-within:text-gray-400  hidden sm:hidden md:block py-2">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                          <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4 mt-2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                          </button>
                      </span>
                      <input type="search" name="q" className=" bg-stone-100 py-2 text-sm  rounded-md pl-10 focus:outline-none w-80" placeholder="Search..." autoComplete="off" />
                  </div>
                </div>

                <div className="flex flex-row items-center justify-around">
                  <p className="text-sm font-medium text-gray-500 border-green-600 hover:text-green-700 cursor-pointer border-b w-full text-center py-2">Focused</p>
                  <p className="text-sm font-medium text-gray-500 hover:text-green-700 cursor-pointer border-b w-full text-center py-2">Other</p>
                </div>

                <div className="h-[460px] overflow-y-scroll">
                  <Chatlist setShowBody={setShowBody}/>
                </div>
                
              </div>
              <div className={`border shaadow-sm rounded-r-lg bg-white col-span-1 md:col-span-2 relative ${showBody ? 'block' : 'hidden'} md:block`}>
                <Chatheader />

                <div className="overflow-y-scroll h-[400px]">
                  <ChatBody />
                </div>
                

                <SendMessage />
              </div>
            </div>
        </main>
    </div>
  )
}

export default messaging