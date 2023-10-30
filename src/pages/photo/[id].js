import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from '@/styles/photo.module.css';
import Tags from "@/app/componentes/Tag";
import ProfilePath from "@/app/componentes/ProfilePath";
import Head from "next/head";

// Page that shows the user one tattoo photo zoomed, where he can click that photo tags for a new search,
// choose one of the suggested images, or go to the artist profile. 
export default function ShowImage() {
  const router = useRouter();
  const [imageState, setImageState] = useState();
  const [suggestedImages, setSuggestedImages] = useState();
  const [params, setParams] = useState();


  useEffect(() => {
    if(router.isReady){
      async function fetchData() {
        // Fetching image by ID
        async function fetchImage() {
          const optionsImage = {
            method: 'POST',
            headers: {
              'Content-Type': "application/json"
            },
            body: JSON.stringify({
              "collection": "images",
              "id": params ?? router.asPath.split("/")[2] 
            })
          };

          const res = await fetch(`/api/fetchById`, optionsImage);       
          if (res.status === 200) {
            const body = await res.json();
            setImageState(body);
            return body;
          }
        }

        const body = await fetchImage();

        // Fetching suggested images by tag
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify({
            "tag": body.tag[0]
          })
        };

        async function getSuggestedImages() {
          const result = await fetch(`/api/getSuggestedImages`, options);     
          if (result.status === 200) {
            const images = await result.json();
            setSuggestedImages(images);
          }
        }

        getSuggestedImages();
      }
        
      fetchData();      
    }
  }, [router.isReady, params]);

  // Function to change params after clicking on suggested image
  const handleClick = (data) => {
    setParams(data);   
  };


  return ( <>
      <Head>
        <title>InkersClub</title>
        <link rel="icon" href="/icons/InK-Icon.ico" sizes="any" />
      </Head>
    <div className={styles.showImageContainer}>
      {imageState && (
        <div className={styles.showImage}>
          {/* Back Button */}
          <button onClick={() => router.back()} className={styles.backButton}><img src="\icons\radix-icons_cross-1.svg" /></button>

          <div className={styles.photoContainer}>
            
            {/* Displaying Selected Image */}
            <div className={styles.photo} style={{ backgroundImage: `url(/api/loadimages/${imageState.path.split("/")[2]})`, backgroundSize: 'cover', width: "90vw", height: "90vw" }} alt="Tattoo Photo"></div>

            <div className={styles.photoInfo}>

              {/* Displaying Image Tags */}
              <div className={styles.tags}>
                {imageState.tag.map(e => <Tags tagName={e} key={e} />)}
              </div>

              {/* Displaying Artist Info */}
              <div>
                <ProfilePath artistId={imageState.artist_id} />
              </div>
              
            </div>

            {/* Title for Suggested Images */}
            <div className={styles.title}>Mais neste estilo:</div>

            {/* Displaying Suggested Images */}
            <div className={styles.suggestedPhotosContainer}>
              {suggestedImages && suggestedImages.map(e => e.path === imageState.path ? null :
                <div key={e._id} onClick={() => handleClick(e._id)} className={styles.suggestedPhoto} style={{ backgroundImage: `url(/api/loadimages/${e.path.split("/")[2]})`, backgroundSize: 'cover', width: "100px", height: "100px" }} alt="Tattoo Photo"></div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  </>
  );
}