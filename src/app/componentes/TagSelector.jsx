import { useEffect, useState } from "react";

export default function TagSelector(props) {

   const [cities, setCities] = useState()
   // retorna
   // dois seletores, onde o primeiro é obrigatório


   useEffect(() => {
      fetch('/cities.json')
         .then(response => response.json())
         .then(cities => {
            setCities(cities);
  
         })
   }, []);

      return ( 

      <><div>
           <select className={styles.select} name="city" onChange={handleChange}>
            {cities.localidade.map((e, i) => i === 0 ? <option value="" disabled selected>{e}</option> : <option value={e}>{e}</option>)}
        </select>
         </div><div>
         <select className={styles.select} name="city" onChange={handleChange}>
            {cities.localidade.map((e, i) => i === 0 ? <option value="" disabled selected>{e}</option> : <option value={e}>{e}</option>)}
        </select>
            </div></>  
   )
 
  
   
}
