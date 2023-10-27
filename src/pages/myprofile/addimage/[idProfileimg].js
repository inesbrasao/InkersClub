import Tags from "@/app/componentes/Tag";
import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import styles from '@/styles/addphoto.module.css'
import Button from "@/app/componentes/Button";
import { useParams } from "next/navigation";
import ProfilePath from "@/app/componentes/ProfilePath";
import Logo from "@/app/componentes/Logo";


export default function AddImage() {
  const router = useRouter()
  const id = router.asPath.split("/")[3]
  //console.log(id)
  const [categories, setCategories] = useState()
  const [imageUrl, setImageUrl] = useState(null);



  const [formInput, setFormInput] = useState({path: undefined, tag: [undefined , undefined]})

    // const optionsImage = {
    //     method: 'POST',
    //     headers: {
    //     'Content-Type': "application/json"
    //     },
    //     body: JSON.stringify(formInput)
    // }
  


  const handleChange = (event) => {
    const {name, value, files} = event.target
    setFormInput(pForm => {
      //Se o campo que foi alterado foi o ficheiro
      if (name === "path") {
        //Não queremos ler o 'value' mas sim o 'files'
        return { ...pForm, [name]: files[0] }
      } else if(name === "tag1") {
        return { ...pForm, "tag": [value, pForm.tag[1]] }
      } else if (name === "tag2") {
        return { ...pForm, "tag": [pForm.tag[0], value] }
      }
    })
    
  }
  const handleFileChange = (event) => {
    const {name, value, files} = event.target
    setFormInput(pForm => {
      //Se o campo que foi alterado foi o ficheiro
      if (name === "path") {
        //Não queremos ler o 'value' mas sim o 'files'
        return { ...pForm, [name]: files[0] }
      } 
    })
    handleImageChange(event)
  }
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file)
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImageUrl(null);
    }
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    //FormData é como JSON, uma estrutura de dados que o backend reconhece (neste caso o multer)
    const formData = new FormData()
    console.log(formInput)

    formData.append("path", formInput.path)


    const result = await fetch("/api/addphoto", {
      method: "POST",
      body: formData
    })

    const image_id = await result.json()
    const data = {artist_id: id, tag: formInput.tag}

    const res = await fetch("/api/updateImage", {
        method: 'POST',
        headers: {
        'Content-Type': "application/json"
        },
        body: JSON.stringify({
          "id": image_id, 
          "data": data
        })
    })

    if(res.status === 200){
      const tags = await fetch("/api/artistTags", {
        method: 'POST',
        headers: {
        'Content-Type': "application/json"
        },
        body: JSON.stringify({
          "id": id, 
        })
      })
      router.push(`/myprofile/${id}`)
    }
 
  }

  useEffect(() => {
    fetch('/categories.json')
    .then(response => response.json())
    .then(categories => {
       setCategories(categories);

    })
 }, []);




  return <div className={styles.addImageContainer}>{categories &&
    <><Logo/>
    <div >
        <form className={styles.formWrapper}>
            <div className={styles.photoPreview}> {imageUrl ? (
              <img src={imageUrl} alt="Preview" style={{ width: "200px", height: "200px"}} />) : (<div></div>)}
            </div>
            <div>
              <label className={styles.loadButton}>Escolha uma imagem
              <input  className={styles.loadButtonDefaut} type="file" name="path" onChange={(e) => handleFileChange(e)} /></label>
            </div>
            <label className={styles.styleLabel}>Estilo de Tatuagem</label>
            <select required className={styles.select} name="tag1" onChange={(e) => handleChange(e)} >
            {categories.tags.map((e, i) => i === 0 ? <option value="" disabled selected>{e}</option> : <option value={e}>{e}</option>)}
            </select>
            <select className={styles.select} name="tag2" onChange={(e) => handleChange(e)} >
            {categories.tags.map((e, i) => i === 0 ? <option value="" disabled selected>{e}</option> : <option value={e}>{e}</option>)}
            </select>
            {/* <select className={styles.inputBox} placeholder="Estilo" name="tag" onChange={(e) => handleChange(e)} required>
            {tags.map((e, i) => i === 0 ? <option value="" disabled>{e}</option> : <option value={e}>{e}</option>)}
            </select> */}
            {/* <select className={styles.inputBox} placeholder="Estilo" name="tag" onChange={(e) => handleChange(e)}>
            {tags.map((e, i) => i === 0 ? <option value="" disabled>{e}</option> : <option value={e}>{e}</option>)}
            </select> */}
            <button className={styles.addButton} onClick={handleSubmit}>Adicionar</button>
        </form>
    </div></>}
  </div>

}