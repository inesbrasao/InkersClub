import ListCard from "@/app/componentes/ListCard";
import styles from '../styles/homepage.module.css'
import Head from 'next/head'
import NavBar from "@/app/componentes/NavBar";

// Page that shows the search form, and lists the images resulting from the search input (or random ones, if it has no search input).
export default function Home() {
    return (<>
      <Head>
        <title>InkersClub</title>
        <link rel="icon" href="/icons/InK-Icon.ico" sizes="any" />
      </Head>

        <div className={styles.body} >
            <ListCard />
        </div>
        <div className={styles.navBar}>
          <NavBar />
        </div>
    </>
    )
}