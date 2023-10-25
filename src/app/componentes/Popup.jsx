function Popup({artist}) {

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({id:artist._id.toString(),collection:"artists"})
    }

    async function deleteById() {

        const res = await fetch(`/api/deleteItem`, options);
    
        console.log(res.status)
        if (res.status === 204) {
     
        }
      }

      
    const handleClick = () => {deleteById()}

    return (
      <div className="modal">
        <div className="modal_box">
          <p>Confirme a sua escolha:</p>
          <button className="modal_buttonCancel">Cancelar</button>
          <button onClick={handleClick} className="modal_buttonDelete">
            Confirmar
          </button>
        </div>
      </div>
    );
  }
  
  export default Popup;