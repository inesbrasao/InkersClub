import Button from "@/app/componentes/Button";
import { useRouter } from "next/router"
import { useState } from "react";


{/*export default function App() {
    const router = useRouter()
    const id = router.asPath.split("/")[2]

    async function fetchData() {
        const res = await fetch(/api/search/{id});


     }
      fetchData();



  return <div>{router.asPath.split("/")}</div>
}*/}


{/*imageState={
  "path": "/6531323d939a1134f4807191/image2.jpg",
    "artist_id": "6531323d939a1134f4807191",
    "tag":["neo tradicional"]
}*/}
const router = useRouter()
const id = router.asPath.split("/")[2]

export default function ShowImage() {

  useEffect(() => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        //"city": paramsPesquisa.city
        "collection": "images",
        "id": id
      })
    }
  })

  async function fetchData() {
    const res = await fetch(`/api/search`, options);

    console.log(res.status)
    if (res.status === 200) {
      const body = await res.json();
      setImagemState(body)

    }
  }
  fetchData();

  const pathImage = imageState.path
  const tags = imageState.tag
  const artistName = imageState  //artist.name






  //retorna 

  return <div>

    <button>Voltar</button>
    <div>
      {/*<Image
           src={pathImage}
           width={500}
           height={500}
           alt={artistName}
        />*/}

      <div>
        {/* <div>
              {state[0].tag.map(e => <Tags tagName={e} />)}
           </div> */}
        <div>
          <p>{artistName}</p>
          {/* <Button name="Ver perfil" /> */}
        </div>

      </div>
    </div>
  </div>





}