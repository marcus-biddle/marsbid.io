import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { about, name } from '../../data/info'

export default function Home() {
  return (
    <section>
      <h1>{name}</h1>
      <p>{about()}</p>
    </section>
  )
}
