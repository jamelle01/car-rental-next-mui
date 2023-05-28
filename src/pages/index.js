import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import ResponsiveAppBar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { Container } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
    </Container>
  )
}
