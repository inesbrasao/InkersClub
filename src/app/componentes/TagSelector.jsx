export default function TagSelector(props) {
   // retorna
   // dois seletores, onde o primeiro é obrigatório
      return ( 

      <><div>
            <select name="tag" onChange={handleChange} required>
               {tags.map(e => <option value={e}>{e}</option>)}
            </select>
         </div><div>
               <select name="tag" onChange={handleChange}>
                  {tags.map(e => <option value={e}>{e}</option>)}
               </select>
            </div></>  
   )
   //? as opções do select virão de uma lista?
  
   
}
