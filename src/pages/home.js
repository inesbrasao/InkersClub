import ListCard from "@/app/componentes/ListCard";
import Button from "@/app/componentes/Button";
import styles from '../styles/homepage.module.css'
import TesteSilvia from "@/app/componentes/TesteSilvia";


export default function Home() {
    return(
          <div>
            <div className={styles.body} >
                <ListCard />
            </div>
            {/* <div>
                <Button>Procuro tatuador</Button>
            </div>

            <div>
                <Button>Sou tatuador</Button>
            </div> */}
           </div> 
    )
  }