import { useState, useEffect } from "react"
import ListCard from "./ListCard"
import styles from "../../styles/homepage.module.css"

// Params {
//     changeParams: function,
//     search: boolean
// }
// InputSearch Component - Search Form at /home
export default function InputSearch({ changeParams, search }) {
   const [searchData, setSearchData] = useState()
   const [cities, setCities] = useState()
   const [categories, setCategories] = useState()

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



   return <>{categories && cities && (<div style={{
      transform: search === true ? "translateY(0px)" : "translateY(-1000px)", left: "0px",
      height: search === true ? "100px" : "0px", transition: "transform 0.3s ease",
      transition: "transform 0.5s cubic-bezier(0.75, 0.25, 0.25, 0.75)"
   }} >
      <form onSubmit={handleSubmit} className={styles.searchForm}>

         <select className={styles.inputBox} placeholder="Estilo" name="tag" onChange={handleChange}>
            {categories.tags.map((e, i) => i === 0 ? <option value="" disabled selected key={e}>{e}</option> : <option value={e} key={e}>{e}</option>)}
         </select>

         <input className={styles.inputBox} type="text" placeholder="Artista" selected name="name" onChange={handleChange} />

         <select className={styles.inputBox} name="city" onChange={handleChange}>
            {cities.localidade.map((e, i) => i === 0 ? <option key={e} value="" disabled selected>{e}</option> : <option key={e} value={e}>{e}</option>)}
         </select>

         <input className={styles.searchButton} type="submit" value="Pesquisar" />
      </form>
   </div>)}
   </>

}