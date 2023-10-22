import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/homepage.module.css'
import ListCard from '@/app/componentes/ListCard'
import ShowImage from '@/app/componentes/ShowImage'
import TesteEvellyn from '@/app/componentes/TesteEvellyn'
import TesteSilvia from '@/app/componentes/TesteSilvia'
import { useRouter } from 'next/router'
import UploadImage from '@/app/componentes/UploadImage'
import ProfilePath from '@/app/componentes/ProfilePath'
import ProfileHeader from '@/app/componentes/ProfileHeader'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>InkersClub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
    <ProfileHeader/>

         </main>
         
    </>
  )
}
//Como fazer router pra outra pagina
//<button onClick={() => router.push("/photo/sfaqwqdsad142asd")}>asfasf</button>
