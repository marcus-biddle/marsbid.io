import Sidebar from '../../components/sidebar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex mx-72 mt-16'>
    <Sidebar />
    <Component {...pageProps} />
    </div>
  
  )
}
