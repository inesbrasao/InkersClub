import { useRouter } from "next/router";

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
      <div className="modal">
        <div className="modal_box">
          <p>Confirme a sua escolha:</p>
          <button className="modal_buttonCancel" onClick={() => changeState(false)}>Cancelar</button>
          <button onClick={handleClick} className="modal_buttonDelete">
            Confirmar
          </button>
        </div>
      </div>
    );
  }
  
  export default Popup;