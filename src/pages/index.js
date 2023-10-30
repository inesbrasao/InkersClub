import Head from 'next/head'
import styles from '@/styles/index.module.css'
import IndexButton from '../app/componentes/IndexButton'


// Index Page, shows Logo and two buttons
export default function Home() {
  

  return (<>
      <Head>
        <title>InkersClub</title>
        <link rel="icon" href="/icons/InK-Icon.ico" sizes="any" />
      </Head>
      <main className={styles.body}>
      <div className={styles.logocontainer}>
      <img src= "\icons\logo-inkersclub-light.svg" className={styles.logo} />
        </div>
      <div className={styles.buttons}>
        <div className={styles.indexbutton}>
          <IndexButton path={"/home"} name={"Procuro tatuador"}/>
        </div>
        <div className={styles.indexbutton}>
          <IndexButton path={"/login"} name={"Sou tatuador"}/>
        </div>
      </div> 
      </main>
        
    </>
  )
}
