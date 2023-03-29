import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { about, avatar, bio, name } from '../../data/info';
import { GithubIcon } from '../../components/icons';

//TODO remove social icons package

export default function Home() {
  return (
    <section className=''>
      <h1 className='text-3xl font-bold'>{name}</h1>
      <p className=' my-5 '>{about()}</p>
      <div className='flex flex-row items-start my-8 gap-x-16'>
        <Image 
        alt={name}
        className="rounded-full grayscale"
        src={avatar}
        placeholder="blur"
        width={100}
        priority
        />
        <div className='text-neutral-500 mt-3'>
          <a className='flex items-center gap-4'>
            {/* <SocialIcon 
            url='https://github.com/marcus-biddle'
            fgColor='pink'
            bgColor='transparent'
            /> */}
            {GithubIcon()}
            {'Github profile'}
          </a>
          <a className='flex items-center gap-4'>
            {/* <SocialIcon
            url='marcusbiddle16@gmail.com'
            /> */}
            {'Resume'}
          </a>
          <a className='flex items-center gap-4'>
            <div>Icon</div>
            {'Contact me'}
          </a>
        </div>
      </div>
      <p>
        {bio()}
      </p>
    </section>
  )
}
