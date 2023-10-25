import Tags from "@/app/componentes/Tag";
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import styles from '@/styles/addphoto.module.css'
import Button from "@/app/componentes/Button";
import { useParams } from "next/navigation";
import ProfilePath from "@/app/componentes/ProfilePath";


export default function AddImage() {
  const router = useRouter()
  const id = router.asPath.split("/")[3]

  const tags = ["Estilo", undefined, "minimalista", "tradicional", "pontilhismo", "aquarela"]
  const cities = ["Distrito", undefined, "Aveiro", "Beja", "Braga", "Bragança", "Castelo Branco", 
    "Coimbra", "Évora", "Faro", "Funchal", "Guarda", "Leiria", "Lisboa", "Portalegre", 
    "Porto", "Santarém", "São Miguel", "Setúbal", "Viana do Castelo", "Vila Real", "Viseu"]
  const [formInput, setFormInput] = useState({artist_id: undefined, path: undefined, tag: []})

    const optionsImage = {
        method: 'POST',
        headers: {
        'Content-Type': "application/json"
        },
        body: JSON.stringify(formInput)
    }
  
  
  
  async function addPhoto() {

    const res = await fetch(`/api/addphoto`, optionsImage);

    if (res.status === 200) {
        router.push(`/myprofile/${id}`)
    }
}

    const handleSubmit = (event) => {
        const {name, value} = event.target
      setFormInput({
         ...formInput,
         [name]: value,
       });
    }

    const handleChange = () => {
        addPhoto()
    }





  return <div>
    <div >
        <form className={styles.formWrapper} onSubmit={handleSubmit}>
            <div className={styles.photoPreview}></div>
            <div>
            <button className={styles.loadButton} onClick={handleChange}>carregar imagem</button>
            </div>
            <label className={styles.styleLabel}>Estilo de Tatuagem</label>
            <select className={styles.inputBox} placeholder="Estilo" name="tag" onChange={handleChange} required>
            {tags.map((e, i) => i === 0 ? <option value="" disabled>{e}</option> : <option value={e}>{e}</option>)}
            </select>
            <select className={styles.inputBox} placeholder="Estilo" name="tag" onChange={handleChange}>
            {tags.map((e, i) => i === 0 ? <option value="" disabled>{e}</option> : <option value={e}>{e}</option>)}
            </select>
            <input className={styles.addButton} type="submit" value="Adicionar" />
        </form>
    </div>
  </div>

}