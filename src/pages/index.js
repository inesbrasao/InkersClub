import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ListCard from '@/app/componentes/ListCard'
import ShowImage from '@/app/componentes/ShowImage'
import TesteEvellyn from '@/app/componentes/TesteEvellyn'
import TesteSilvia from '@/app/componentes/TesteSilvia'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const artista = {
    "name": "João Silva",
    "email": "joao.silva@gmail.com",
    "instagram": "@joaosilva",
    "city": "Lisboa",
    "shop": "ArtStudio Lisboa",
    "phone": "+351912345678",
    "password": "SenhaSegura123",
    "category": ["neo tradicional", "aquarela"]
};
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
        {/*<TesteEvellyn/>*/}
         </main>
         <button onClick={() => router.push("/photo/sfaqwqdsad142asd")}>asfasf</button>
    </>
  )
}


