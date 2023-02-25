import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link href="/contact"><button className='btn btn-primary'>Contact</button></Link>
      <Link href="/about"><button className='btn btn-success'>About</button></Link>
    </div>
  )
}
