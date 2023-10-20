import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ListCard from '@/app/componentes/ListCard'
import ShowImage from '@/app/componentes/ShowImage'
import TesteEvellyn from '@/app/componentes/TesteEvellyn'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Grupo5</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {/* <ShowImage />     */}
        <ListCard />
        {/*<TesteEvellyn/>*/}
         </main>
         <button onClick={() => router.push("/photo/sfaqwqdsad142asd")}>asfasf</button>
    </>
  )
}


