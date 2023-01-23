import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();


  useEffect(() => {
    setTimeout(() => {
      router.push('/home')
    }, 2000) 
  }, [])


  return (
    <div>
      <Head>
        <title>Job Hunt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex justify-center items-center h-screen'>
        <div className='flex items-center flex-col'>
          <Image 
            src={require('../public/loading.jpg')}
            height={80}
            width={200}
            alt='Logo'
          />
          <span className="loader"></span>
        </div>
      </main>
      
    </div>
  )
}

export default Home
