export default function TagSelector(props) {
   // retorna
   // dois seletores, onde o primeiro é obrigatório
   

      return ( 
      <select name="tag" onChange={handleChange}>
   {tags.map(e => <option value={e}>{e}</option>)}
   </select>
   )
  

   

   
   //? as opções do select virão de uma lista?
  
   
}
