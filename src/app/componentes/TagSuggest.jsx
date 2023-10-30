import { useEffect, useState } from "react";
import Tag from "./Tag"

// Params {
//     changeParams: function
// }
// TagSuggest Component - Popular Tags listed in the /home page.
export default function TagSuggest({changeParams}) {
   const [tagList, setTagList] = useState()

   useEffect(() => {

      const optionsImage = {
         method: 'POST',
         headers: {
           'Content-Type': "application/json"
         },
         body: JSON.stringify({
           "collection": "images"
         })
       }
 
     async function fetchTags() {
 
     const res = await fetch(`/api/getPopularTags`, optionsImage);

     if (res.status === 200) {
         const body = await res.json();
         setTagList(body)
     }
   }

     fetchTags()

   }, [])



   return <>
      {tagList && <div>
         {tagList.map(e => <Tag changeParams={(data) => changeParams(data)} tagName={e} key={e} />)}
         </div>
         }
   </>



   
}