import { useRouter } from "next/router";
import styles from '@/styles/popup.module.css'

// Params {
//     data: object,
//     collection: string,
//     changeState: function
// }
// PopUp Component - Confirmation PopUp, after clicking a delete button (on artists profile or showimage)
function Popup({data, collection, changeState}) {
  const router = useRouter()

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({id:data._id.toString(),collection: collection})
    }

    async function deleteById() {

        const res = await fetch(`/api/deleteItem`, options);
    
        console.log(res.status)
        if (res.status === 200) {
          if(collection === "artists"){
            router.push(`/`)
          }  else {
            router.push(`/myprofile/${data.artist_id}`)
          }   
        }
      }

      
    const handleClick = () => {deleteById()}

    return (
      <div className={styles.popupContainer}>
        
        <div className={styles.popupBox}>
          <p className={styles.popupTxt}>Tem a certeza que quer excluir?</p>
          <div className={styles.buttonContainer}>
          <button className={styles.popupButtonCancel} onClick={() => changeState(false)}>Cancelar</button>

          <button onClick={handleClick} className={styles.popupButtonConfirm}>
            Confirmar
          </button>
        </div>
        </div>
      </div>
    );
  }
  
  export default Popup;