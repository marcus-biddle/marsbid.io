import Sidebar from '../../components/sidebar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex px-72 pt-32 h-screen bg-black text-white'>
    <Sidebar />
    <Component {...pageProps} />
    </div>
  
  )
}
