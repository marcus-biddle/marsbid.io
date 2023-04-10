import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { about, avatar, bio, name } from '../../data/info';
import { ContactIcon, GithubIcon, ResumeIcon } from '../../components/icons';
import Link from 'next/link';

//TODO remove social icons package

const icons = [
  {
    icon: GithubIcon(),
    name: 'Github Profile',
    path: 'https://github.com/marcus-biddle'
  },
  {
    icon: ResumeIcon(),
    name: 'LinkedIn @marcusbiddle',
    path: ''
  },
]

export default function Home() {
  return (
    <section className=''>
      <h1 className='text-3xl font-bold'>{name}</h1>
      <p className=' my-5'>{about()}</p>
      <div className='flex flex-row items-start my-8 gap-x-16'>
        <Image 
        alt={name}
        className="rounded-full grayscale"
        src={avatar}
        placeholder="blur"
        width={100}
        priority
        />
        <div className=' mt-2 flex flex-col gap-y-1'>
          {icons.map((link) => {
            return (
              <a 
              href={link.path} 
              key={link.name}
              className='flex items-center gap-6 opacity-50 cursor-pointer hover:opacity-100'
              >
                {link.icon} {link.name}
              </a>
            )
          })}
          {/* <a 
          href='https://github.com/marcus-biddle'
          className='flex items-center gap-6 opacity-50 cursor-pointer hover:opacity-100'
          >
            {GithubIcon()}
            {'Github profile'}
          </a>
          <a className='flex items-center gap-6 opacity-50 cursor-pointer hover:opacity-100'>
            LinkedIN Icon instead
            {ResumeIcon()}
            {'LinkedIn @marcusbiddle'}
          </a> */}
          <Link 
          href='/contact'
          className='flex items-center gap-6 opacity-50 cursor-pointer hover:opacity-100'>
            {/* take user to contact form */}
            {ContactIcon()}
            {'Contact me'}
          </Link>
        </div>
      </div>
      <p>
        {bio()}
      </p>
    </section>
  )
}
