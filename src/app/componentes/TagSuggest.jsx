import { useEffect, useState } from "react";
import Tag from "./Tags"
import { useRouter } from "next/router";

export default function TagSuggest() {
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
         console.log(body)
         setTagList(body)
     }
   }

     fetchTags()

   }, [])


   return <div>
      {tagList && <div>
         {tagList.map(e => <Tag tagName={e} />)}
         </div>
         }
   </div>



   
}