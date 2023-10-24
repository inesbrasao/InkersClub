import { useState, useEffect } from "react"
import ListCard from "./ListCard"
import styles from "../../styles/homepage.module.css"

export default function InputSearch({changeParams}) {
   const [searchData, setSearchData] = useState()
   const tags = ["Estilo", undefined, "minimalista", "tradicional", "pontilhismo", "aquarela"]
   const cities = ["Distrito", undefined, "Aveiro", "Beja", "Braga", "Bragança", "Castelo Branco", 
   "Coimbra", "Évora", "Faro", "Funchal", "Guarda", "Leiria", "Lisboa", "Portalegre", 
   "Porto", "Santarém", "São Miguel", "Setúbal", "Viana do Castelo", "Vila Real", "Viseu"]

   const handleChange = (event) =>  {
      const {name, value} = event.target
      setSearchData({
         ...searchData,
         [name]: value,
       });
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      changeParams(searchData)
   }


   return<div >
      <form onSubmit={handleSubmit} className={styles.searchForm}>
         {/* <div> */}
         <select className={styles.inputBox} placeholder="Estilo" name="tag" onChange={handleChange}>
         {tags.map((e, i) => i === 0 ? <option value="" disabled>{e}</option> : <option value={e}>{e}</option>)}
         </select>
         {/* </div>
         <div> */}
         <input className={styles.inputBox} type="text" placeholder="Artista" name="name" onChange={handleChange}/>
         {/* </div>
         <div> */}
         <select className={styles.inputBox} name="city" onChange={handleChange}>
         {cities.map((e, i) => i === 0 ? <option value="" disabled>{e}</option> : <option value={e}>{e}</option>)}
         </select>
         {/* </div> */}
         <input className={styles.searchButton} type="submit" value="Pesquisar" />
      </form>
   </div>

   
}