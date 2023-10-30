import { useRouter } from "next/router"
import { useEffect, useState, } from "react";
import styles from '@/styles/addphoto.module.css'
import Logo from "@/app/componentes/Logo";
import Head from "next/head";

// Page to add a new Tattoo Photo
export default function AddImage() {
  const router = useRouter()
  const id = router.asPath.split("/")[3]
  const [categories, setCategories] = useState()
  const [imageUrl, setImageUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState()
  const [formInput, setFormInput] = useState({path: undefined, tag: []})


  


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
      if (name === "path") {
        return { ...pForm, [name]: files[0] }
      } 
    })
    handleImageChange(event)
  }
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
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
    const formData = new FormData()

    formData.append("path", formInput.path)


    const result = await fetch("/api/addphoto", {
      method: "POST",
      body: formData
    })
    if(result.status === 200){
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

      if(res.status === 412){
        const message = await res.json()
        setErrorMessage(message.message)
      }
    } else {
      setErrorMessage("Tem de adicionar uma foto.")
    }
  }

  useEffect(() => {
    fetch('/categories.json')
    .then(response => response.json())
    .then(categories => {
       setCategories(categories);

    })
 }, []);




  return <>
      <Head>
        <title>InkersClub</title>
        <link rel="icon" href="/icons/InK-Icon.ico" sizes="any" />
      </Head>
  <button onClick={() => router.back()} className={styles.backButton}><img src="\icons\radix-icons_cross-1.svg" /></button>
  
  <div className={styles.addImageContainer}>{categories &&
    <>
    <Logo/>
    
    <div >
        <form className={styles.formWrapper}>
            <div className={styles.photoPreview}> {imageUrl ? (
              <img src={imageUrl} alt="Preview" style={{ width: "200px", height: "200px"}} />) : (<div></div>)}
            </div>
            <div>
              <label className={styles.loadButton}>Escolher imagem
              <input  className={styles.loadButtonDefaut} type="file" name="path" onChange={(e) => handleFileChange(e)} /></label>
            </div>
            <label className={styles.styleLabel}>Estilo de Tatuagem</label>
            <select required className={styles.select} name="tag1" onChange={(e) => handleChange(e)} >
            {categories.tags.map((e, i) => i === 0 ? <option value="" disabled selected>{e}</option> : <option value={e}>{e}</option>)}
            </select>
            <select className={styles.select} name="tag2" onChange={(e) => handleChange(e)} >
            {categories.tags.map((e, i) => i === 0 ? <option value="" disabled selected>{e}</option> : <option value={e}>{e}</option>)}
            </select>
            {errorMessage ? <p className={styles.errorMessage}>{errorMessage}</p> : null}
            <button className={styles.addButton} onClick={handleSubmit}>Adicionar</button>
        </form>
    </div></>}
  </div>
  </>

}