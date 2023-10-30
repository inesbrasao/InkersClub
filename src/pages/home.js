import ListCard from "@/app/componentes/ListCard";
import styles from '../styles/homepage.module.css'
import Head from 'next/head'


export default function Home() {
    return (<>
      <Head>
        <title>InkersClub</title>
        <link rel="icon" href="/icons/InK-Icon.ico" sizes="any" />
      </Head>

        <div className={styles.body} >
            <ListCard />
        </div>
    </>
    )
}