import ListCard from "@/app/componentes/ListCard";
import styles from '../styles/homepage.module.css'


export default function Home() {
    return(
          <div>
          <div className={styles.body} >
              <ListCard />

          </div>
          </div>
    )
  }