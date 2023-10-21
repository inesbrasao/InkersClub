import { useState, useEffect } from "react"
import ListCard from "./ListCard"

export default function InputSearch({changeParams}) {
   const [searchData, setSearchData] = useState()
   const tags = [undefined, "minimalista", "tradicional", "pontilhismo", "aquarela"]
   const cities = [undefined, "Aveiro", "Beja", "Braga", "Bragança", "Castelo Branco", 
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
      changeParams(searchData)
   }


   return<div>
      <form onSubmit={handleSubmit}>
         <label>Estilo:</label>
         <select name="tag" onChange={handleChange}>
         {tags.map(e => <option value={e}>{e}</option>)}
         </select>
         <label>Artista:</label>
         <input type="text" name="name" onChange={handleChange}/>
         <label>Distrito:</label>
         <select name="city" onChange={handleChange}>
         {cities.map(e => <option value={e}>{e}</option>)}
         </select>
         <input type="submit" value="Pesquisar" />
      </form>
   </div>

   
}