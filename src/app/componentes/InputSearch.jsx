import { useState, useEffect } from "react"
import ListCard from "./ListCard"
import styles from "../../styles/homepage.module.css"


export default function InputSearch({ changeParams }) {
   const [searchData, setSearchData] = useState()
   const [cities, setCities] = useState()
   const [categories, setCategories] = useState()
   //const tags = ["Estilo", undefined, "minimalista", "tradicional", "pontilhismo", "aquarela"]
   // const cities = ["Distrito", undefined, "Aveiro", "Beja", "Braga", "Bragança", "Castelo Branco", 
   // "Coimbra", "Évora", "Faro", "Funchal", "Horta", "Angra do Heroísmo","Guarda", "Leiria", "Lisboa", "Portalegre", 
   // "Porto", "Santarém", "Ponta Delgada", "Setúbal", "Viana do Castelo", "Vila Real", "Viseu"]

   const handleChange = (event) => {
      const { name, value } = event.target
      setSearchData({
         ...searchData,
         [name]: value,
      });
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      changeParams(searchData)
   }

   useEffect(() => {
      fetch('/cities.json')
         .then(response => response.json())
         .then(cities => {
            setCities(cities);

         })
      fetch('/categories.json')
         .then(response => response.json())
         .then(categories => {
            setCategories(categories);

         })
   }, []);



   return <>{categories && cities &&(<div >
      <form onSubmit={handleSubmit} className={styles.searchForm}>

         <select className={styles.inputBox} placeholder="Estilo" name="tag" onChange={handleChange}>
            {categories.tags.map((e, i) => i === 0 ? <option value="" disabled selected key={e}>{e}</option> : <option value={e} key={e}>{e}</option>)}
         </select>

         <input className={styles.inputBox} type="text" placeholder="Artista" selected name="name" onChange={handleChange} />

         <select className={styles.inputBox} name="city" onChange={handleChange}>
            {cities.localidade.map((e, i) => i === 0 ? <option value="" disabled selected>{e}</option> : <option value={e}>{e}</option>)}
         </select>

         <input className={styles.searchButton} type="submit" value="Pesquisar" />
      </form>
   </div>)}
   </>

}